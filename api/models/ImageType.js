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
            required: true
        },
        // Description du type d'image
        // ex: Image JPEG
        description: {
            type: 'string'
        },
        // Description du type d'image
        // ex: jpg
        extension: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        images: {collection: 'Image'}
    }
    // Lifecycle Callbacks
};

