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
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // create: function
    // Interdit de mettre à jour un message depuis l'API (dans un premier temps)
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un message posté depuis l'API (dans un premier temps)
    destroy: function (req, res) {
        res.forbidden();
    }
};

