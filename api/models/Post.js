/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        creator: {model: 'User'},
        visibility: {model: 'Visibility'},
        // ============
        // == to Many
        postComments: {
            collection: 'PostComment',
            via: 'post'
        }
    }
    // Lifecycle Callbacks
};

