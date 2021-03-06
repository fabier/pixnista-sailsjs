/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // Contenu du message
        // ex: "Salut, tu as vu mon dernier post ?"
        message: {
            type: 'string',
            required: true
        },
        // ============
        // Associations
        // ============
        // == to One
        // Créateur (rédacteur) du message
        creator: {
            model: 'User'
        },
        // Destinataire du message
        recipient: {
            model: 'User'
        }
        // ============
        // == to Many
    }
    // Lifecycle Callbacks
};

