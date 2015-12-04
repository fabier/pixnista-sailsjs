/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Il est interdit de lister les messages depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    }
};

