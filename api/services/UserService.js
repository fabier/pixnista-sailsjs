/**
 * UserService
 *
 * @description :: Service for managing users
 */
var async = require('async');

module.exports = {
    /**
     *
     * @param {type} options (contains : email, password)
     * @param {type} callback
     * @returns {undefined}
     */
    create: function (options, callback) {
        if (options.constructor === Array) {
            var users = [];
            async.each(options, function (option, callback) {
                createOneUser(option, function (err, user) {
                    users.push(user);
                    callback();
                });
            }, function (err) {
                callback(err, users);
            });
        } else {
            createOneUser(options, callback);
        }
    }
};

function createOneUser(options, callback) {
    var Passwords = require('machinepack-passwords');
    // Encrypt a string using the BCrypt algorithm.
    Passwords.encryptPassword({
        password: options.password,
        difficulty: 10
    }).exec({
        // An unexpected error occurred.
        error: function (err) {
            sails.log.warn("UserService : Impossible to create a User (step encrypt password)", options)
            callback(err);
        },
        // OK.
        success: function (encryptedPassword) {
            // Create a User with the params sent from
            // the sign-up form --> signup.ejs
            User.create({
                name: options.name,
                email: options.email,
                encryptedPassword: encryptedPassword,
                avatarUrl: options.avatarUrl,
                description: options.description
            }, function (err, user) {
                if (err) {
                    sails.log.warn("UserService : Impossible to create a User (step User.create)", options, err)

                    // If this is a uniqueness error about the email attribute,
                    // send back an easily parseable status code.
                    if (err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0]
                            && err.invalidAttributes.email[0].rule === 'unique') {
                        sails.log.warn("UserService : Impossible to create a User (step User.create : email already in use)", options)
                    } else {
                        sails.log.warn("UserService : Impossible to create a User (step User.create)", options)
                    }
                }

                delete user.password;
                delete user.encryptedPassword;
                callback(err, user);
            });
        }
    });
}