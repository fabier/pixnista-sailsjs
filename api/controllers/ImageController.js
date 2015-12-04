/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Il est interdit de lister les images depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    }
};

