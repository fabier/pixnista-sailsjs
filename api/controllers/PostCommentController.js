/**
 * PostCommentController
 *
 * @description :: Server-side logic for managing postcomments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var mergeDefaults = require('merge-defaults');

module.exports = {
    create: function (req, res) {
        console.log('req.params.all()', req.params.all());
        console.log('req.body', req.body);
        var params = mergeDefaults(req.params.all(), {creator: req.session.user.id});
        PostComment.create(params, function (err, postComment) {
            if (err)
                return res.negotiate(err);
            // Send JSONP-friendly response if it's supported
            res.created(postComment);
        });
    },
    /**
     * Il est interdit de lister les commentaires de posts depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    }
};

