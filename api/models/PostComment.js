/**
 * PostComment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Commentaire
        // ex: "J'aime bien le haut, mais le bas est trop flashy"
        comment: {
            type: 'string',
            required: true
        },
        // Date de dernière mise à jour
        // ex: 2015-02-17T14:34:01
        lastUpdated: {
            type: 'date',
            required: true,
            defaultsTo: new Date()
        },
        // Date de création
        // ex: 2015-02-17T14:34:01
        dateCreated: {
            type: 'date',
            required: true,
            defaultsTo: new Date()
        },
        // ============
        // Associations
        // ============
        // == to One
        // L'utilisateur qui a fait le commentaire
        creator: {model: 'User'},
        // Le post auquel se réfère ce commentaire
        post: {model: 'Post'},
        // ============
        // == to Many
        // La liste des votes pour ce commentaire
        postCommentVotes: {collection: 'PostCommentVote'}
    },
    // Lifecycle Callbacks
    beforeUpdate: function (values, cb) {
        values.lastUpdated = new Date();
        values.save(function (err, o) {
            cb();
        });
    }
};

