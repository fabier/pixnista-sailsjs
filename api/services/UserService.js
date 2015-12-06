/**
 * UserService
 *
 * @description :: Service for managing users
 */
var async = require('async');
var common = require('../common');

module.exports = {
    init: function (callback) {
        User.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("UserService : no users found, initializing...");
                UserService.create({
                    name: 'Pierre FABIER',
                    email: 'fabier@free.fr',
                    password: 'pixistù!'
                }, function (err, user) {
                    if (err) {
                        sails.log.warn("UserService : error initializing users !");
                    } else {
                        sails.log.info("UserService : user", user.id, "now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("UserService :", values.length, "users already initialized.");
                callback();
            }
        });
    },
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
            require('machinepack-gravatar').getImageUrl({
                emailAddress: options.email
            }).exec({
                error: function (err) {
                    sails.log.warn("UserService : Impossible to create a User (step generate gravatar url)", options, err)
                    callback(err);
                },
                success: function (gravatarUrl) {
                    // Create a User with the params sent from
                    // the sign-up form --> signup.ejs
                    User.create({
                        name: options.name,
                        email: options.email,
                        encryptedPassword: encryptedPassword,
                        gravatarUrl: gravatarUrl
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

                        callback(err, user);
                    });
                }
            });
        }
    });
}