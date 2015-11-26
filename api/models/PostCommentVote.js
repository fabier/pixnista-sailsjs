/**
 * PostCommentVote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Valeur qui indique si l'utilisateur a aimé ou pas ce commentaire
        // ex: true, signifie que ce commentaire est bon.
        // false, signifie que ce commentaire n'est pas correct
        vote: {
            type: 'boolean',
            required: true
        },
        // ============
        // Associations
        // ============
        // == to One
        // L'utilisateur qui a voté pour ce commentaire
        creator: {model: 'User'},
        postComment: {model: 'PostComment'}
        // ============
        // == to Many
    }
    // Lifecycle Callbacks
};

