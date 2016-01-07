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
                        email: faker.internet.email(),
                        description: faker.lorem.sentences(),
                        avatarUrl: faker.image.avatar()
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
            postTypeHelp: function (callback) {
                PostTypeService.help(callback);
            },
            postTypeDressing: function (callback) {
                PostTypeService.dressing(callback);
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
            var postTypeHelp = results.postTypeHelp;
            sails.log.info("postTypeHelp = " + postTypeHelp);
            var postTypeDressing = results.postTypeDressing;
            sails.log.info("postTypeDressing = " + postTypeDressing);
            var voteReasons = results.voteReasons;
            var allPosts = [], helpPosts = [], dressingPosts = [];
            var comments = [];
            var votes = [];
            var users = results.users;
            sails.log.info("FakerService - " + users.length + " Users created");
            // sails.log.info(users);
            // Affichage de login et password pour test
            // sails.log.info(_.pluck(users, ["email", "password"]));

            // Pour chaque utilisateur créé,
            // on crée un jeu de données comprenant des posts avec
            // un titre, un commentaire et une image à chaque fois
            sails.log.info("FakerService - Posts being created for all users... please wait...");
            async.each(users, function (user, callback) {
                async.waterfall([
                    // Création de données image (need help)
                    function (callback) {
                        createRandomImages(user, imageType, callback);
                    },
                    // Création de posts associés à ces images
                    function (images, callback) {
                        createPostsFromImages(images, user, visibility, postTypeHelp, callback);
                    },
                    // Création de données image (dressing)
                    function (posts, callback) {
                        Array.prototype.push.apply(helpPosts, posts);
                        Array.prototype.push.apply(allPosts, posts);
                        createRandomImages(user, imageType, callback);
                    },
                    // Création de posts associés à ces images
                    function (images, callback) {
                        createPostsFromImages(images, user, visibility, postTypeDressing, callback);
                    }
                ], function (err, posts) {
                    if (err) {
                        throw err;
                    }
                    Array.prototype.push.apply(dressingPosts, posts);
                    Array.prototype.push.apply(allPosts, posts);
                    callback();
                });
            }, function (err) {
                if (err) {
                    throw err;
                }
                sails.log.info("FakerService - " + helpPosts.length + " Help Posts created for all users");
                sails.log.info("FakerService - " + dressingPosts.length + " Dressing Posts created for all users");
                sails.log.info("FakerService - Comments and votes being created for all users... please wait...");
                async.each(allPosts, function (post, callback) {
                    async.parallel({
                        // Ajout de votes au post créé
                        votes: function (callback) {
                            createPostVotesToPost(post, users, voteReasons, callback);
                        },
                        // Création de commentaires sur le post existants
                        comments: function (callback) {
                            createPostCommentsToPost(post, users, callback);
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
                    sails.log.info("FakerService - " + comments.length + " Comments created for all posts");
                    sails.log.info("FakerService - " + votes.length + " Votes created for all posts");
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
            url: url,
            creator: user.id,
            data: null,
            md5: null,
            type: 'image/jpeg',
            filename: faker.internet.domainWord() + '.jpg'
        });
    }
    async.each(imageDatas, function (imageData, callback) {
        downloadAsBuffer(imageData.url, function (err, res, body) {
            if (err) {
                // On n'a pas réussi à télécharger le contenu de l'image
                // On laisse tomber sans émettre d'erreur,
                // car émettre une erreur reviendrait à arrêter tout le process
                sails.log.warning("FakerService - Impossible to download url :", imageData.url);
                callback();
            } else {
                imageData.data = body;
                sails.log.verbose("FakerService - Data fetched");
                ImageData.create(imageData, function (err, imageDataCreated) {
                    if (err) {
                        throw err;
                    } else {
                        sails.log.verbose("imageDataCreated", imageDataCreated);
                        imageData.id = imageDataCreated.id;
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
                    }
                });
            }
        });
    }, function (err) {
        if (err) {
            throw err;
        }
        sails.log.verbose("FakerService - Images created", images);
        callback(null, images);
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

function createPostVotesToPost(post, users, voteReasons, callback) {
    var postVotes = [];
    async.each(_.shuffle(users), function (user, callback) {
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

function createPostCommentsToPost(post, users, callback) {
    var postComments = [];
    async.each(_.shuffle(users), function (user, callback) {
        if (!!Math.round(Math.random())) {
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