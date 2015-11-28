/**
 * Language.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom de la langue
        // ex: Francais
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        // Autres informations
        // ex: Francais, Francais Québecois
        description: {
            type: 'string'
        },
        // Code ISO 639-1, sur 2 caractères
        // ex: "fr"
        isocode6391: {
            type: 'string',
            required: true,
            unique: true,
            size: 2,
            minLength: 2,
            maxLength: 2
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        // Liste des utilisateurs qui utilisent cette langue
        users: {
            collection: 'User',
            via: 'language'
        }
    }
};

