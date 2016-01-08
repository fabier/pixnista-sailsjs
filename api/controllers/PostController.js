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
    /**
     * @api {post} /post Creating a new post
     * @apiName CreatePost
     * @apiDescription  Creates a new post using parameters submitted
     * @apiGroup Post
     * @apiPermission none
     *
     * @apiParam {String} title Title of the Post
     * @apiParam {String} content Content of the Post
     * @apiParam {Number} creator Identifier of the creator
     *
     * @apiSuccess {Number} id Post unique Identifier
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
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
     * @api {get} /post Get all Posts information
     * @apiName GetPosts
     * @apiGroup Post
     * @apiDescription Gets all posts informations.
     *
     * This method always returns HTTP 1.1/403 Forbidden.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 403 Forbidden
     */
    // Il est interdit de lister les posts depuis l'API Rest
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @api {get} /post/help Get top 10 'help' posts
     * @apiName GetHelpPosts
     * @apiGroup Post
     * @apiDescription Gets top 10 'help' posts informations.
     */
    /**
     * @api {get} /post/help/:limit Get top [limit] 'help' posts
     * @apiName GetHelpPostsWithLimit
     * @apiGroup Post
     * @apiDescription Get top [limit] 'help' posts informations.<br/>
     * limit min value is 1.<br/>
     * limit max value is 100.
     */
    help: function (req, res) {
        findPostsByPostType('help', req, res);
    },
    /**
     * @api {get} /post/dressing Get top 10 'dressing' posts
     * @apiName GetDressingPosts
     * @apiGroup Post
     * @apiDescription Gets top 10 'dressing' posts informations.
     */
    /**
     * @api {get} /post/dressing/:limit Get top [limit] 'help' posts
     * @apiName GetDressingPostsWithLimit
     * @apiGroup Post
     * @apiDescription Get top [limit] 'dressing' posts informations.<br/>
     * limit min value is 1.<br/>
     * limit max value is 100.
     */
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
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission none
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
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
            var limit = Math.min(Math.max(req.param('limit') || 10, 1), 100);
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

