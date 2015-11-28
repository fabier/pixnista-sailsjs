/**
 * Country.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom du pays
        // ex: France
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        // Autres informations sur le pays
        // ex: France Métropolitaine et DOM TOM
        description: {
            type: 'string'
        },
        // Code ISO 3166-1, sur 2 caractères
        // ex: "FR"
        isocode31661: {
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
        // Liste des utilisateurs de ce pays
        users: {
            collection: 'User',
            via: 'country'
        }
    }
};

