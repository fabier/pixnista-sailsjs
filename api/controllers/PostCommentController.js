/**
 * PostCommentController
 *
 * @description :: Server-side logic for managing postcomments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var mergeDefaults = require('merge-defaults');

module.exports = {
    // Il est interdit de lister les commentaires de posts depuis l'API Rest
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
     * @api {post} /postComment Create a PostComment
     * @apiName CreatePostComment
     * @apiDescription Creates a new Comment on a Post
     * @apiGroup PostComment
     * @apiPermission USER
     *
     * @apiParam {String} comment PostComment content
     * @apiParam {Number} post PostId on which the comment is about.
     *
     * @apiSuccess {Number} postId the Id for the newly created PostComment
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    create: function (req, res) {
        var params = req.params.all();
        if (req.session.user) {
            params = mergeDefaults(req.params.all(), {creator: req.session.user.id});
        } else {
            // TODO Fix This
            // En principe on ne devrait pas pouvoir créer de postComment, car on n'est pas loggué,
            // mais il faut d'abord trouver une solution pour les tests...
            // ... du coup on accepte que dans la requete
            // on ait un attribut 'creator' qui donnera l'identifiant du créateur
        }
        PostComment.create(params, function (err, postComment) {
            if (err)
                return res.negotiate(err);
            // Send JSONP-friendly response if it's supported
            res.created(postComment);
        });
    },
    // Interdit de mettre à jour un commentaire depuis l'API (dans un premier temps)
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un commentaire depuis l'API (dans un premier temps)
    destroy: function (req, res) {
        res.forbidden();
    }
};

