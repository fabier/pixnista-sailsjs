/**
 * PostCommentVoteController
 *
 * @description :: Server-side logic for managing postcommentvotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Il est interdit de lister les votes de commentaires depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    }
};

