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
        image: {model: 'Image'},
        language: {model: 'Language'},
        country: {model: 'Country'},
        bodyType: {model: 'BodyType'},
        // ============
        // == to Many
        fashionStyles: {collection: 'FashionStyle'},
        followedUsers: {collection: 'User'},
        followingUsers: {collection: 'User'},
        blacklistedUsers: {collection: 'User'},
        incomingMessages: {
            collection: 'Message',
            via: 'recipient'
        },
        outgoingMessages: {
            collection: 'Message',
            via: 'creator'},
        posts: {
            collection: 'Post',
            via: 'creator'
        },
        postVotes: {
            collection: 'PostVote',
            via: 'creator'
        },
        postComments: {
            collection: 'PostComment',
            via: 'creator'
        }
    }
    // Lifecycle Callbacks
};
