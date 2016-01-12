/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Il est interdit de lister les messages depuis l'API Rest
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
     * @api {post} /message Create a new message
     * @apiName CreateMessage
     * @apiDescription Creates a new message, from an authenticated user to another.
     * If the user emitter is not blacklisted by the recipient, then the message is transmitted to the recipient.
     * <br/>
     * <b>NOT IMPLEMENTED YET</b>
     * @apiGroup Message
     * @apiPermission USER
     *
     * @apiParam {String} message Message content
     * @apiParam {Number} recipient The recipient of the message
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // create: function
    // Interdit de mettre à jour un Message depuis l'API
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un Message posté depuis l'API
    destroy: function (req, res) {
        res.forbidden();
    }
};

