/**
 * BodyTypeService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */

var async = require('async');
var faker = require('faker');
var randomId = require('random-id');
var fs = require('fs');
var _ = require('underscore');
var request = require('request');

var downloadAsBuffer = function (uri, callback) {
    request.get({uri: uri, encoding: null}, callback);
};

var userCount = 10;
var maxPostsPerUser = 10;

module.exports = {
    init: function (callback) {
        sails.log.info("FakerService - DEBUT DE LA CREATION DE DONNEES GENEREES");
        // Création des utilisateurs
        var users = [];
        async.parallel({
            users: function (callback) {
                sails.log.info("FakerService - Users being created... please wait...");
                for (var i = 0; i < userCount; i++) {
                    users.push({
                        name: faker.name.findName(),
                        password: randomId(18),
                        email: faker.internet.email()
                    });
                }
                UserService.create(users, callback);
            },
            imageType: function (callback) {
                ImageTypeService.jpg(callback);
            },
            visibility: function (callback) {
                VisibilityService.public(callback);
            },
            postType: function (callback) {
                PostTypeService.help(callback);
            },
            voteReasons: function (callback) {
                VoteReasonService.find(callback);
            }
        }, function (err, results) {
            if (err) {
                throw err;
            }
            var imageType = results.imageType;
            var visibility = results.visibility;
            var postType = results.postType;
            var voteReasons = results.voteReasons;
            var posts = [];
            var comments = [];
            var votes = [];
            sails.log.info("FakerService - " + users.length + " Users created");
            sails.log.info(users);
            // Affichage de login et password pour test
//            sails.log.info(_.pluck(users, ["email", "password"]));

            // Pour chaque utilisateur créé,
            // on crée un jeu de données comprenant des posts avec
            // un titre, un commentaire et une image à chaque fois
            sails.log.info("FakerService - Posts being created for all users... please wait...");
            async.each(results.users, function (user, callback) {
                async.waterfall([
                    // Création de données image
                    function (callback) {
                        createRandomImages(user, imageType, callback);
                    },
                    // Création de posts associés à ces images
                    function (images, callback) {
                        createPostsFromImages(images, user, visibility, postType, callback);
                    }
                ], function (err, results) {
                    if (err) {
                        throw err;
                    }
                    Array.prototype.push.apply(posts, results);
                    callback();
                });
            }, function (err) {
                if (err) {
                    throw err;
                }
                sails.log.info("FakerService - " + posts.length + " Posts created for all users");
                sails.log.info("FakerService - Comments and votes being created for all users... please wait...");
                async.each(results.users, function (user, callback) {
                    async.parallel({
                        // Ajout de votes aux posts créés
                        votes: function (callback) {
                            createPostVotesToPosts(posts, user, voteReasons, callback);
                        },
                        // Création de commentaires sur les posts existants
                        comments: function (callback) {
                            createPostCommentsToPosts(posts, user, callback);
                        }
                    }, function (err, results) {
                        if (err) {
                            throw err;
                        }
                        Array.prototype.push.apply(votes, results.votes);
                        Array.prototype.push.apply(comments, results.comments);
                        callback();
                    });

                }, function (err) {
                    if (err) {
                        throw err;
                    }
                    sails.log.info("FakerService - " + comments.length + " Comments created for all users");
                    sails.log.info("FakerService - " + votes.length + " Votes created for all users");
                    sails.log.info("FakerService - FIN DE LA CREATION DE DONNEES GENEREES");
                    callback();
                });
            });
        });
    }
};

function createRandomImages(user, imageType, callback) {
    var url = 'http://loremflickr.com/128/128/selfie,fashion';
    var imageDatas = [];
    var images = [];
    var imagesCountToCreate = Math.floor(Math.random() * maxPostsPerUser);
    for (var i = 0; i < imagesCountToCreate; i++) {
        imageDatas.push({
            url: 'http://loremflickr.com/128/128/selfie,fashion',
            creator: user.id,
            data: null,
            md5: null,
            type: 'image/jpeg',
            filename: faker.internet.domainWord() + '.jpg'
        });
    }
    async.each(imageDatas, function (imageData, callback) {
        downloadAsBuffer(imageData.url, function (err, res, body) {
            imageData.data = body;
            sails.log.verbose("FakerService - Data fetched");
            callback();
        });
    }, function (err) {
        if (err) {
            throw err;
        }
        async.each(imageDatas, function (imageData, callback) {
            ImageData.create(imageData, function (err, imageData) {
                sails.log.verbose("FakerService - ImageData created");
                Image.create({
                    name: imageData.filename,
                    filename: imageData.filename,
                    description: faker.lorem.sentence(),
                    creator: user.id,
                    imageData: imageData.id,
                    imageType: imageType.id
                }, function (err, image) {
                    images.push(image);
                    callback();
                });
            });
        }, function (err) {
            if (err) {
                throw err;
            }
            sails.log.verbose("FakerService - Images created", images);
            callback(null, images);
        });
    });
}

function createPostsFromImages(images, user, visibility, postType, callback) {
    var posts = [];
    async.each(images, function (image, callback) {
        Post.create({
            title: faker.lorem.sentence(),
            content: faker.lorem.sentences(),
            creator: user.id,
            visibility: visibility.id,
            postType: postType.id
        }, function (err, post) {
            posts.push(post);
            post.images.add(image.id);
            post.save(function (err, p) {
                sails.log.verbose("FakerService - Post saved", p);
                callback();
            });
        });
    }, function (err) {
        sails.log.verbose("FakerService - Posts created", posts);
        callback(null, posts);
    });
}

function createPostVotesToPosts(posts, user, voteReasons, callback) {
    var postVotes = [];
    async.each(posts, function (post, callback) {
        if (!!Math.round(Math.random())) {
            var vote = !!Math.round(Math.random());
            sails.log.verbose("FakerService - vote :", vote);
            PostVote.create({
                vote: vote,
                comment: faker.lorem.sentence(),
                post: post.id,
                creator: user.id,
                voteReason: vote ? null : voteReasons[Math.floor(Math.random() * voteReasons.length)]
            }, function (err, postVote) {
                postVotes.push(postVote);
                callback();
            });
        } else {
            callback();
        }
    }, function (err) {
        sails.log.verbose("FakerService - PostVotes created", postVotes);
        callback(null, postVotes);
    });
}

function createPostCommentsToPosts(posts, user, callback) {
    var postComments = [];
    async.each(posts, function (post, callback) {
        if (!!Math.round(Math.random())) {
            var vote = !!Math.round(Math.random());
            sails.log.verbose("FakerService - vote :", vote);
            PostComment.create({
                comment: faker.lorem.sentence(),
                post: post.id,
                creator: user.id
            }, function (err, postComment) {
                postComments.push(postComment);
                callback();
            });
        } else {
            callback();
        }
    }, function (err) {
        sails.log.verbose("FakerService - PostComments created", postComments);
        callback(null, postComments);
    });
}