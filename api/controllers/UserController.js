/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    /**
     * Il est interdit de lister les utilisateurs depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * Check the provided email address and password, and if they
     * match a real user in the database, sign in.
     */
    login: function (req, res) {

        // Try to look up user using the provided email address
        User.findOne({
            email: req.param('email')
        }, function foundUser(err, user) {
            if (err)
                return res.negotiate(err);
            if (!user)
                return res.notFound();

            // Compare password attempt from the form params to the encrypted password
            // from the database (`user.password`)
            require('machinepack-passwords').checkPassword({
                passwordAttempt: req.param('password'),
                encryptedPassword: user.encryptedPassword
            }).exec({
                error: function (err) {
                    return res.negotiate(err);
                },
                // If the password from the form params doesn't checkout w/ the encrypted
                // password from the database...
                incorrect: function () {
                    return res.notFound();
                },
                success: function () {

                    // Store user id in the user session
                    req.session.me = user.id;

                    // Mise à jour de la date de dernière connexion de l'utilisateur
                    user.lastLoggedIn = new Date();
                    user.save(function (err, o) {
                        if (err) {
                            return res.negotiate(err);
                        } else {
                            // All done- let the client know that everything worked.
                            return res.ok();
                        }
                    });
                }
            });
        });
    },
    /**
     * Create a user account (Signup).
     */
    create: function (req, res) {

        var Passwords = require('machinepack-passwords');

        // Encrypt a string using the BCrypt algorithm.
        Passwords.encryptPassword({
            password: req.param('password'),
            difficulty: 10
        }).exec({
            error: function (err) {
                return res.negotiate(err);
            },
            success: function (encryptedPassword) {
                require('machinepack-gravatar').getImageUrl({
                    emailAddress: req.param('email')
                }).exec({
                    error: function (err) {
                        return res.negotiate(err);
                    },
                    success: function (gravatarUrl) {
                        User.create({
                            name: req.param('name'),
                            email: req.param('email'),
                            encryptedPassword: encryptedPassword,
                            lastLoggedIn: new Date(),
                            gravatarUrl: gravatarUrl
                        }, function (err, newUser) {
                            if (err) {
                                // If this is a uniqueness error about the email attribute,
                                // send back an easily parseable status code.
                                if (err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0]
                                        && err.invalidAttributes.email[0].rule === 'unique') {
                                    return res.emailAddressInUse();
                                }

                                // Otherwise, send back something reasonable as our error response.
                                return res.negotiate(err);
                            }

                            // Log user in
                            req.session.me = newUser.id;

                            // Send back the id of the new user
                            return res.status(201).json({id: newUser.id});
                        });
                    }
                });
            }
        });
    },
    /**
     * Log out.
     * (wipes `me` from the sesion)
     */
    logout: function (req, res) {

        // Look up the user record from the database which is
        // referenced by the id in the user session (req.session.me)
        User.findOne(req.session.me, function foundUser(err, user) {
            if (err)
                return res.negotiate(err);

            // If session refers to a user who no longer exists, still allow logout.
            if (!user) {
                sails.log.verbose('Session refers to a user who no longer exists.');
                return res.backToHomePage();
            }

            // Wipe out the session (log out)
            req.session.me = null;

            // Either send a 200 OK or redirect to the home page
            return res.backToHomePage();
        });
    },
    update: function (req, res) {
        User.findOne({
            id: req.param('id')
        }, function (err, user) {
            if (err)
                return res.negotiate(err);
            if (!user)
                return res.notFound();

            // Utilisateur trouvé, tout va bien
            var Passwords = require('machinepack-passwords');

            // Encrypt a string using the BCrypt algorithm.
            Passwords.encryptPassword({
                password: req.param('password'),
                difficulty: 10
            }).exec({
                error: function (err) {
                    return res.negotiate(err);
                },
                success: function (encryptedPassword) {
                    User.update({id: user.id},
                            {encryptedPassword: encryptedPassword},
                            function (err, updated) {
                                if (err) {
                                    return res.negotiate(err);
                                } else {
                                    return res.json(updated);
                                }
                            }
                    );
                }});
        });
    }
};
