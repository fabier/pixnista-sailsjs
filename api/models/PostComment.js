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
    }
    // Lifecycle Callbacks
};

