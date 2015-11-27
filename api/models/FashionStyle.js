/**
 * FashionStyle.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom du style vestimentaire
        // ex: classic, modern, grunge, hippie, glamour
        name: {
            type: 'string',
            required: true
        },
        // Description technique du style vestimentaire
        // ex: "Porte des jeans slim, et aime danser la tecktonik"
        description: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        // Liste des utilisateurs avec ce style vestimentaire
        users: {
            collection: 'User'
        }
    }
    // Lifecycle Callbacks
};

