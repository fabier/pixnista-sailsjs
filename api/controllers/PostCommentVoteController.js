/**
 * PostCommentVoteController
 *
 * @description :: Server-side logic for managing postcommentvotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
    // Il est interdit de lister les votes de commentaires depuis l'API Rest
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @api {get} /message/:id Get Message by Id
     * @apiName GetMessageById
     * @apiDescription Gets a Message by its Id
     * @apiGroup Message
     * @apiPermission none
     *
     * @apiParam {Number} id MessageId
     *
     * @apiSuccess {Number} array.id MessageId
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

