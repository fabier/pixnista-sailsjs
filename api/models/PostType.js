/**
 * PostType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom du type de post
        // ex: "help", "dressing"
        name: {
            type: 'string',
            required: true
        },
        // Description du type de post
        // ex: "Demande d'aide", "Mon dressing, mon look"
        description: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        // Liste des posts de ce type (help ou dressing)
        posts: {
            collection: 'Post',
            via: 'postType'
        }
    }
    // Lifecycle Callbacks
};

