/**
 * PostVoteController
 *
 * @description :: Server-side logic for managing postvotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
    update: function (req, res) {
        res.forbidden();
    },
    destroy: function (req, res) {
        res.forbidden();
    }
};

