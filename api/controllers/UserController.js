/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
    // Il est interdit de lister les utilisateurs depuis l'API Rest
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @api {get} /user/:id Get User by Id
     * @apiName GetUserById
     * @apiDescription Gets a User by its Id
     * @apiGroup User
     * @apiPermission none
     *
     * @apiParam {Number} id UserId
     *
     * @apiSuccess {Number} name User's display name
     * @apiSuccess {Number} description User self description
     * @apiSuccess {Number} email User's email
     * @apiSuccess {Date} lastLoggedIn Date when the user last logged in
     * @apiSuccess {String} gender Male ('M') or Female ('F')
     * @apiSuccess {Date} birthdate Birthdate
     * @apiSuccess {Number} height Height in cm
     * @apiSuccess {Number} weight Weight in kilograms
     * @apiSuccess {Number} image User's image Id (avatar)
     * @apiSuccess {Number} language User's LanguageId
     * @apiSuccess {Number} country User's CountryId
     * @apiSuccess {Number} bodyType User's BodyTypeId
     * @apiSuccess {Number} fashionStyles List of fashionStyles for this User
     * @apiSuccess {Number} followedUsers Users that this User follows
     * @apiSuccess {Number} followedByUsers Users that follows this User
     * @apiSuccess {Number} blacklistedUsers Users that are blacklisted by this User
     * @apiSuccess {Number} blacklistedByUsers Users that blacklisted this User
     * @apiSuccess {Number} incomingMessages List of incoming Messages
     * @apiSuccess {Number} outgoingMessages List of outgoing Messages
     * @apiSuccess {Number} posts List of Posts created by this User
     * @apiSuccess {Number} favoritePosts List of Posts favorited by this User
     * @apiSuccess {Number} postVotes List of PostVotes created by this User
     * @apiSuccess {Number} postComments List of PostComments created by this User
     * @apiSuccess {Number} postCommentVotes List of PostCommentVotes created by this User
     *
     * @apiSuccess {Number} array.id ImageId
     * @apiSuccess {String} array.name Name of Image
     * @apiSuccess {String} array.filename Image's Filename
     * @apiSuccess {String} array.description Image's Description
     * @apiSuccess {String} array.imageData ImageDataId for this Image
     * @apiSuccess {String} array.imageType ImageTypeId for this Image
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // findOne: function
    /**
     * Check the provided email address and password, and if they
     * match a real user in the database, sign in.
     */
    /**
     * @api {put} /login Login
     * @apiName UserLogin
     * @apiDescription Logs a user in
     * @apiGroup User
     * @apiPermission none
     *
     * @apiParam {String} email The user's email
     * @apiParam {String} password The user's password
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
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
     * @api {post} /signup Signups a new User
     * @apiName SignupUser
     * @apiDescription Creates a new User
     * @apiGroup User
     * @apiPermission none
     *
     * @apiParam {String} name User's display name
     * @apiParam {String} email User's email
     * @apiParam {String} password User's password
     *
     * @apiSuccess {Number} id Id of the newly created User
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
    /**
     * @api {get} /logout Logs out a User
     * @apiName LogOutUser
     * @apiDescription Logs out a connected User
     * @apiGroup User
     * @apiPermission User
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    logout: function (req, res) {
        // Wipe out the session (log out)
        req.session.user = undefined;

        // Either send a 200 OK or redirect to the home page
        return res.backToHomePage();
    },
    /**
     * @api {put} /user/:id Updates a User
     * @apiName UpdateUser
     * @apiDescription Updates User metadata, User must be logged in
     * @apiGroup User
     * @apiPermission USER
     *
     * @apiParam {String} password The new password
     *
     * @apiSuccess {Number} id The UserId updated
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    update: function (req, res) {
        if (req.session.user) {
            var user = req.session.user;
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
        } else {
            res.notFound();
        }
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
    // Interdit de supprimer un User depuis l'API
    destroy: function (req, res) {
        res.forbidden();
    }
});