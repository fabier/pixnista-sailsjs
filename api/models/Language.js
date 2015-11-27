/**
 * Language.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        // Présentation de l'utilisateur
        // ex: Fashion addict and lover
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
        }
    }
};

