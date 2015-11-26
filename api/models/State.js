/**
 * State.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom de l'état
        // ex: active, inactive, deleted
        name: {
            type: 'string',
            required: true
        },
        // Description succinte de l'état
        // ex: "Actif, visible sur le site web" ou "Supprimé par l'utilisateur"
        description: {
            type: 'string'
        }
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
    }
    // Lifecycle Callbacks
};

