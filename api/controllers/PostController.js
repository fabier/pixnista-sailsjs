/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Il est interdit de lister les posts depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    }
};

