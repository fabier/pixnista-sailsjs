/**
 * PostVote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Valeur du vote
        // ex: true, pour indiquer un vote positif
        // false, pour indiquer un vote négatif
        vote: {
            type: 'boolean',
            required: true
        },
        // Commentaire de l'utilisateur qui a émis un vote
        // ex: "C'est tout bon sauf la cravate"
        comment: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        creator: {model: 'User'},
        voteReason: {model: 'VoteReason'}
        // ============
        // == to Many
    }
    // Lifecycle Callbacks
};

