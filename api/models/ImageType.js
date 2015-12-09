/**
 * ImageType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom du type d'image
        // ex: JPEG, PNG
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        // Description du type d'image
        // ex: Image JPEG
        description: {
            type: 'string'
        },
        // Extensions possibles du type d'image
        // ex: ['jpg', 'jpeg']
        extensions: {
            type: 'array'
        },
        // Types MIME possibles du type d'image
        // ex: ['image/jpg', 'image/jpeg']
        mimetypes: {
            type: 'array'
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        // Liste des images de ce type
        images: {
            collection: 'Image',
            via: 'imageType'
        },
        // Liste des données binaires de ce type
        imageDatas: {
            collection: 'ImageData',
            via: 'imageType'
        }
    }
    // Lifecycle Callbacks
};

