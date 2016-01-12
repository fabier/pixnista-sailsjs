/**
 * PostCommentVoteController
 *
 * @description :: Server-side logic for managing postcommentvotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Il est interdit de lister les votes de commentaires depuis l'API Rest
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @api {get} /postVote/:id Get PostVote by Id
     * @apiName GetPostVoteById
     * @apiDescription Gets a PostVote by its Id
     * @apiGroup PostVote
     * @apiPermission none
     *
     * @apiParam {Number} id PostVoteId
     *
     * @apiSuccess {Number} array.id PostVoteId
     * @apiSuccess {String} array.message Message content
     * @apiSuccess {String} array.creator Creator of this Message
     * @apiSuccess {String} array.recipient Recipient of this Message
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // findOne: function
    /**
     * @api {post} /postComment Create a PostCommentVote
     * @apiName CreatePostComment
     * @apiDescription Create a new PostCommentVote on an existing PostComment
     * @apiGroup PostComment
     * @apiPermission USER
     *
     * @apiParam {Number} postComment The PostCommentId on which the user is submitting a new PostCommentVote
     * @apiParam {Boolean} vote
     *
     * @apiSuccess {Number} array.id PostCommentVoteId
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // create: function
    // Interdit de mettre à jour un PostCommentVote depuis l'API
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un PostCommentVote depuis l'API
    destroy: function (req, res) {
        res.forbidden();
    }
};

