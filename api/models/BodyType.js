/**
 * BodyType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom du type de corps
        // ex: fin, gros, rond, triangle, etc.
        name: {
            type: 'string',
            required: true
        },
        // Description plus explicite du type de corps
        // ex: Corps grand et plutot mince
        description: {
            type: 'string'
        },
        // Date de dernière mise à jour
        // ex: 2015-02-17T14:34:01
        lastUpdated: {
            type: 'date',
            required: true,
            defaultsTo: new Date()
        },
        // Date de création
        // ex: 2015-02-17T14:34:01
        dateCreated: {
            type: 'date',
            required: true,
            defaultsTo: new Date()
        },
        // ============
        // Associations
        // ============
        // == to One
        // ============
        // == to Many
        users: {collection: 'User'}
    },
    // Lifecycle Callbacks
    beforeUpdate: function (values, cb) {
        values.lastUpdated = new Date();
        values.save(function (err, o) {
            cb();
        });
    }
};

