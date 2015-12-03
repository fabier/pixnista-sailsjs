/**
 * Visibility.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom de l'état de visibilité
        // ex: public, followers, private
        name: {
            type: 'string',
            required: true
        },
        // Description de l'état
        // ex:
        description: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        // Liste des posts avec cette visibilité (public, followers ou private)
        posts: {
            collection: 'Post',
            via: 'visibility'
        }
    }
    // Lifecycle Callbacks
};

