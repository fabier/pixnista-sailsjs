/**
 * UserProfile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Genre : Homme (M) ou Femme (F)
        // ex: M
        gender: {
            type: 'string',
            enum: ['M', 'F']
        },
        // Date de naissance
        // ex: 1993-11-10
        birthdate: {
            type: 'date'
        },
        // Taille de l'utilisateur (en cm)
        // ex: 185
        height: {
            type: 'integer'
        },
        // Poids de l'utilisateur (en kg)
        // ex: 64.5
        weight: {
            type: 'float'
        },
        // ============
        // Associations
        // ============
        // == to One
        bodyType: {model: 'BodyType'},
        // ============
        // == to Many
    }
};

