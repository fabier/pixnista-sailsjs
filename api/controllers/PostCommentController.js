/**
 * PostCommentController
 *
 * @description :: Server-side logic for managing postcomments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Il est interdit de lister les commentaires de posts depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    }
};

