/**
 * VoteReasonController
 *
 * @description :: Server-side logic for managing votereasons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /voteReason Get all VoteReasons
     * @apiName GetVoteReasons
     * @apiDescription Lists all available VoteReasons
     * @apiGroup VoteReason
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of VoteReasons
     * @apiSuccess {Number} array.id VoteReasonId
     * @apiSuccess {String} array.name Name of VoteReason
     * @apiSuccess {String} array.description Description of VoteReason
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /voteReason/:id Get VoteReason by Id
     * @apiName GetVoteReasonById
     * @apiDescription Gets a VoteReason by its Id
     * @apiGroup VoteReason
     * @apiPermission none
     *
     * @apiParam {Number} id VoteReasonId
     *
     * @apiSuccess {Number} array.id VoteReasonId
     * @apiSuccess {String} array.name Name of VoteReason
     * @apiSuccess {String} array.description Description of VoteReason
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // findOne: function
    // Interdit de créer un VoteReason depuis l'API
    create: function (req, res) {
        res.forbidden();
    },
    // Interdit de mettre à jour un VoteReason depuis l'API
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un VoteReason depuis l'API
    destroy: function (req, res) {
        res.forbidden();
    }
};

