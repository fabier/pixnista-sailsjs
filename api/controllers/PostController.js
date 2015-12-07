/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var moment = require('moment');
var _ = require('underscore');

module.exports = {
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
    show: function (req, res) {
        Post.findOne(req.param('id'))
                .populate("creator")
                .populate("postComments")
                .populate("images")
                .populate("postVotes")
                .exec(function (err, post) {
                    if (err) {
                        res.negotiate(err);
                    } else {
                        var creators = _.pluck(post.postComments, 'creator');
                        creators = _.uniq(creators);
                        sails.log.info(creators);
                        User.find({id: {$in: creators}}, function (err, creators) {
                            if (err) {
                                res.negotiate(err);
                            } else {
                                creators = _.indexBy(creators, 'id');
                                post.postComments = _.map(post.postComments, function (postComment) {
                                    postComment.creator = creators[postComment.creator];
                                    return postComment;
                                });
                                res.view('post', {
                                    post: post,
                                    moment: moment
                                });
                            }
                        });
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

