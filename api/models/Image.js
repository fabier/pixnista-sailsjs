/**
 * Image.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom affichable de l'image
        // ex: Robe de soirée
        name: {
            type: 'string',
            required: true
        },
        // Nom du fichier lorsqu'il a été uploadé
        // ex: DSC_0048.JPG
        filename: {
            type: 'string',
            required: true
        },
        // Description de l'image, saisi par l'utilisateur
        // ex: Je n'ai pas porté cette robe depuis 2009
        description: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        creator: {
            model: 'User'
        },
        imageData: {
            model: 'ImageData'
        },
        imageType: {
            model: 'ImageType'
        }
        // ============
        // == to Many
    }
    // Lifecycle Callbacks
};

