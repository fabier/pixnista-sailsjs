/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {
    attributes: require('waterlock').models.user.attributes({
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
        // Admin
        // true si l'utilisateur est admin, false dans le cas contraire
        admin: {
            type: 'boolean',
        },
        // Password chiffré de l'utilisateur
        // ex: 2$a492.abc3fadifhoi3hesdqd
        encryptedPassword: {
            type: 'string',
            required: true
        },
        // url for avatar
        // ex: https://s3.amazonaws.com/uifaces/faces/twitter/josecarlospsh/128.jpg
        avatarUrl: {
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
        // Image (Photo) de cet utilisateur
        image: {
            model: 'Image'
        },
        // Langue de cet utilisateur
        language: {
            model: 'Language'
        },
        // Pays de cet utilisateur
        country: {
            model: 'Country'
        },
        // BodyType de cet utilisateur
        bodyType: {
            model: 'BodyType'
        },
        // ============
        // == to Many
        // Liste des style vestimentaires de l'utilisateur
        fashionStyles: {
            collection: 'FashionStyle',
            via: 'users',
            dominant: 'yes'
        },
        // Liste des utilisateurs que cet utilisateur suit
        followedUsers: {
            collection: 'User',
            via: 'followedByUsers',
            dominant: 'yes'
        },
        // Liste des utilisateurs qui suivent cet utilisateur
        followedByUsers: {
            collection: 'User',
            via: 'followedUsers'
        },
        // Liste des utilisateurs blacklisté par cet utilisateur
        blacklistedUsers: {
            collection: 'User',
            via: 'blacklistedByUsers',
            dominant: 'yes'
        },
        // Liste des utilisateurs qui ont blacklisté cet utilisateur
        blacklistedByUsers: {
            collection: 'User',
            via: 'blacklistedUsers'
        },
        // Liste des messages entrants pour cet utilisateur
        incomingMessages: {
            collection: 'Message',
            via: 'recipient'
        },
        // Liste des messages sortant (émis par) cet utilisateur
        outgoingMessages: {
            collection: 'Message',
            via: 'creator'
        },
        // Liste des posts publiés par cet utilisateur
        posts: {
            collection: 'Post',
            via: 'creator'
        },
        // Posts favoris de cet utilisateur
        favoritePosts: {
            collection: 'Post',
            via: 'favoritedByUsers',
            dominant: 'yes'
        },
        // Votes émis par cet utilisateur sur des posts
        postVotes: {
            collection: 'PostVote',
            via: 'creator'
        },
        // Commentaires émis par cet utilisateur sur des posts
        postComments: {
            collection: 'PostComment',
            via: 'creator'
        },
        // Vote émis par cet utilisateur sur des commentaires de posts
        postCommentVotes: {
            collection: 'PostCommentVote',
            via: 'creator'
        }
    }),
    // Lifecycle Callbacks
    beforeCreate: require('waterlock').models.user.beforeCreate,
    beforeUpdate: require('waterlock').models.user.beforeUpdate
};
