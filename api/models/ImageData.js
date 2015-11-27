/**
 * ImageData.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Données brutes de l'image
        data: {
            type: 'binary',
            required: true
        },
        // valeur de hashage permettant de reconnaître rapidement
        // qu'une image a été postée plusieurs fois
        // ex: 9547aed4cbed4aadbcbc03595137f47d
        md5: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        image: {
            model: 'Image'
        },
        imageType: {
            model: 'ImageType'
        }
        // ============
        // == to Many
    }
    // Lifecycle Callbacks
};

