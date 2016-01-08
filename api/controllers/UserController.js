/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission none
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // Il est interdit de lister les utilisateurs depuis l'API Rest
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
                    // Store user in the user session
                    req.session.user = user;

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
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission none
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // Create a user account (Signup).
    create: function (req, res) {
        UserService.create({
            name: req.param('name'),
            email: req.param('email'),
            password: req.param('password')
        }, function (err, user) {
            if (err) {
                res.negotiate(err);
            } else {
                // Log user in
                req.session.user = user;
                user.lastLoggedIn = new Date();
                user.save(function (err, user) {
                    if (err) {
                        res.negotiate(err);
                    } else {
                        delete user.password;
                        delete user.encryptedPassword;
                        return res.status(201).json(user);
                    }
                });
            }
        });
    },
    /**
     * Log out.
     * (wipes `user` from the session)
     */
    logout: function (req, res) {
        // Wipe out the session (log out)
        req.session.user = undefined;

        // Either send a 200 OK or redirect to the home page
        return res.backToHomePage();
    },
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission none
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
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
    },
    show: function (req, res) {
        User.findOne(req.param("id"), function (err, user) {
            if (err) {
                return res.negotiate(err);
            } else if (user) {
                res.view("user/show", user);
            } else {
                res.notFound();
            }
        });
    },
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission Forbidden
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    destroy: function (req, res) {
        res.forbidden();
    }
});