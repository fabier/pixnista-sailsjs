/**
 * PostVoteController
 *
 * @description :: Server-side logic for managing postvotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Il est interdit de lister les votes de posts depuis l'API Rest
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @api {get} /postVote/:id Get PostVote by Id
     * @apiName GetPostVoteById
     * @apiDescription Gets a PostVote by its Id
     * @apiGroup PostVote
     * @apiPermission none
     *
     * @apiParam {Number} id PostVoteId
     *
     * @apiSuccess {Number} array.id PostVoteId
     * @apiSuccess {Boolean} array.vote The value of the vote, true means positive vote, false is for negative vote
     * @apiSuccess {String} array.comment Text comment written by voter
     * @apiSuccess {Number} array.creator UserId that submitted this vote
     * @apiSuccess {Number} array.voteReason The reason explaining why the vote is negative (when vote is negative only)
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // findOne: function
    /**
     * @api {post} /postVote Creates a PostVote
     * @apiName CreatePostVote
     * @apiDescription Creates a new PostVote on an existing Post
     * @apiGroup PostVote
     * @apiPermission USER
     *
     * @apiParam {Boolean} array.post The PostId on which the User wants to submit a vote
     * @apiParam {Boolean} array.vote The value of the vote, true means positive vote, false is for negative vote
     * @apiParam {String} array.comment Text comment written by voter
     * @apiParam {String} array.creator UserId that submitted this vote
     * @apiParam {Number} array.voteReason The reason explaining why the vote is negative (when vote is negative only)
     *
     * @apiSuccess {Number} id PostVoteId newly created
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

