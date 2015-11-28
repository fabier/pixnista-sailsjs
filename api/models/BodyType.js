/**
 * BodyType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom du type de corps
        // ex: fin, gros, rond, triangle, etc.
        name: {
            type: 'string',
            required: true
        },
        // Description plus explicite du type de corps
        // ex: Corps grand et plutot mince
        description: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        // Liste des utilisateurs qui ont déclaré avoir ce BodyType
        users: {
            collection: 'User',
            via: 'bodyType'
        }
    }
    // Lifecycle Callbacks
};

