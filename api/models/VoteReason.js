/**
 * VoteReason.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom de la raison
        // ex: "Style incorrect"
        name: {
            type: 'string',
            required: true
        },
        // Description plus longue de la raison
        // ex: "Dans son ensemble, la tenue n'est pas équilibrée"
        description: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        // Liste des votes sur des posts avec cette raison invoquée
        postVotes: {
            collection: 'PostVote',
            via: 'voteReason'
        }
    }
    // Lifecycle Callbacks
};

