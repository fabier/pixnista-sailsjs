/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Titre du post
        title: {
            type: 'string',
            required: true
        },
        // Contenu du post
        content: {
            type: 'string'
        },
        // ============
        // Associations
        // ============
        // == to One
        // Créateur du post
        creator: {
            model: 'User'
        },
        // Visibilité du post (publique, restreinte ou privée)
        visibility: {
            model: 'Visibility'
        },
        // ============
        // == to Many
        // Liste des images contenues dans ce post
        images: {
            collection: 'Image',
            via: 'posts',
            dominant: 'yes'
        },
        // Liste des commentaires émis sur ce post
        postComments: {
            collection: 'PostComment',
            via: 'post'
        },
        // Liste des utilisateurs qui ont mis ce post en favori
        favoritedByUsers: {
            collection: 'User',
            via: 'favoritePosts'
        }
    }
    // Lifecycle Callbacks
};

