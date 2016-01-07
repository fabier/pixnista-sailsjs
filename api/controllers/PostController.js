/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var moment = require('moment');
var faker = require('faker');
var mergeDefaults = require('merge-defaults');
var _ = require('underscore');

module.exports = {
    create: function (req, res) {
        var params = mergeDefaults(req.params.all(), {creator: req.session.user.id});
        Post.create(params, function (err, post) {
            if (err)
                return res.negotiate(err);
            // Send JSONP-friendly response if it's supported
            res.created(post);
        });
    },
    /**
     * Il est interdit de lister les posts depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    },
    help: function (req, res) {
        findPostsByPostType('help', req, res);
    },
    dressing: function (req, res) {
        findPostsByPostType('dressing', req, res);
    },
    new : function (req, res) {
        if (!req.session.user) {
//            res.set('WWW-Authenticate', 'Basic realm="pixnista.com":').status(401).send("Not Authorized");
            res.view("auth/login", {faker: faker});
        } else {
            res.view("post/create", {faker: faker});
        }
    },
    addToImages: function (req, res) {
        var postId = req.param('id');
        var imageId = req.param('imageId');
        Post.findOne(req.param('id'), function (err, post) {
            if (err) {
                res.negotiate(err);
            } else {
                post.images.add(imageId);
                post.save(function (err, post) {
                    if (err) {
                        res.negotiate(err);
                    } else {
                        res.json(post);
                    }
                });
            }
        });
    },
    show: function (req, res) {
        Post.findOne(req.param('id'))
                .populate("creator")
                .populate("postComments")
                .populate("images")
                .populate("postVotes")
                .exec(function (err, post) {
                    if (err) {
                        res.negotiate(err);
                    } else if (post) {
                        // On va aller chercher les informations relatives aux utilisateurs
                        // qui ont posté des commentaires sur ce post
                        var creators = _.pluck(post.postComments, 'creator');
                        creators = _.uniq(creators);
                        User.find({id: {$in: creators}}, function (err, creators) {
                            if (err) {
                                res.negotiate(err);
                            } else {
                                creators = _.indexBy(creators, 'id');
                                post.postComments = _.map(post.postComments, function (postComment) {
                                    postComment.creator = creators[postComment.creator];
                                    return postComment;
                                });

                                var positiveVotesCount = _.filter(post.postVotes, function (vote) {
                                    return vote.vote;
                                }).length;

                                res.view('post/show', {
                                    post: post,
                                    totalVotesCount: post.postVotes.length,
                                    positiveVotesCount: positiveVotesCount,
                                    moment: moment,
                                    faker: faker
                                });
                            }
                        });
                    } else {
                        res.notFound();
                    }
                });
    }
};

function findPostsByPostType(postTypeName, req, res) {
    PostType.findOne({name: postTypeName}).exec(function (err, postType) {
        if (err) {
            res.negotiate(err);
        } else {
            var limit = Math.min(req.param('limit') || 30, 30);
            Post.find({postType: postType.id}).limit(limit).populate('images').exec(function (err, posts) {
                if (err) {
                    res.negotiate(err);
                } else {
                    res.json(posts);
                }
            });
        }
    });
}

