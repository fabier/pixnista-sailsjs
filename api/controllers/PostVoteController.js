/**
 * PostVoteController
 *
 * @description :: Server-side logic for managing postvotes
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
    // Il est interdit de lister les votes de posts depuis l'API Rest
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @api {get} /language/:id Get Language by Id
     * @apiName GetLanguageById
     * @apiDescription Gets a Language by its Id
     * @apiGroup Language
     * @apiPermission none
     *
     * @apiParam {Number} id LanguageId
     *
     * @apiSuccess {Number} array.id LanguageId
     * @apiSuccess {Boolean} array.vote The value of the vote, true means positive vote, false is for negative vote
     * @apiSuccess {String} array.comment Text comment written by voter
     * @apiSuccess {String} array.creator UserId that submitted this vote
     * @apiSuccess {String} array.voteReason The reason explaining why the vote is negative (when vote is negative only)
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
    create: function (req, res) {
        var postVote = {
            vote: req.param('vote'),
            comment: req.param('comment'),
            post: req.param('post'),
            creator: req.param('creator'),
            voteReason: req.param('voteReason')
        };
        // On cherche si un vote existe déjà pour ce post
        PostVote.findOne({post: postVote.post, creator: postVote.creator}, function (err, postVoteExists) {
            if (err) {
                return res.negotiate(err);
            } else if (postVoteExists) {
                // Si l'utilisateur a déjà voté, il ne peut pas voter une nouvelle fois
                res.status(403).send("It's forbidden to vote twice on the same post");
            } else {
                // Si l'utilisateur n'a pas encore voté, alors on prend en compte son vote
                PostVote.create(postVote, function (err, postVote) {
                    if (err) {
                        return res.negotiate(err);
                    } else {
                        // Send back the created PostVote
                        return res.status(201).json(postVote);
                    }
                });
            }
        });
    },
    // Interdit de mettre à jour un PostVote depuis l'API
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un PostVote depuis l'API
    destroy: function (req, res) {
        res.forbidden();
    }
};

