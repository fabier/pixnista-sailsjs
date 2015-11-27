/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Nom complet et affichable de l'utilisateur
        // ex: John Doe
        name: {
            type: 'string',
            required: true
        },
        // Présentation de l'utilisateur
        // ex: Fashion addict and lover
        description: {
            type: 'string'
        },
        // Email de l'utilisateur
        // ex: nikola@tesla.com
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        // Password chiffré de l'utilisateur
        // ex: 2$a492.abc3fadifhoi3hesdqd
        encryptedPassword: {
            type: 'string',
            required: true
        },
        // url for gravatar
        // ex: http://www.gravatar.com/avatar/9c73e342de67bb40c5923350acf44760
        gravatarUrl: {
            type: 'string'
        },
        // Dernière date de connexion de l'utilisateur
        // ex: 2015-02-17T14:34:01
        lastLoggedIn: {
            type: 'date',
            required: true,
            defaultsTo: new Date()
        },
        // ============
        // Associations
        // ============
        // == to One
        image: {model: 'Image'},
        userProfile: {model: 'UserProfile'},
        language: {model: 'Language'},
        country: {model: 'Country'},
        // ============
        // == to Many
        styles: {collection: 'FashionStyle'},
        followedUsers: {collection: 'User'},
        followingUsers: {collection: 'User'},
        blacklistedUsers: {collection: 'User'},
        incomingMessages: {collection: 'Message'},
        outgoingMessages: {collection: 'Message'},
        posts: {collection: 'Post'}
    }
    // Lifecycle Callbacks
};
