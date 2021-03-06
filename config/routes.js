/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {
    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    ////////////////////////////////////////////////////////////
    // Server-rendered HTML webpages
    ////////////////////////////////////////////////////////////

    'GET /': 'PageController.showHomePage',
    'GET /user/jwt': 'UserController.jwt',
    'GET /auth/signup': {view: 'auth/signup'},
    'GET /auth/login': 'AuthController.login',
    //
    ////////////////////////////////////////////////////////////
    // JSON API
    ////////////////////////////////////////////////////////////
    //
    // User authentication
    'PUT /api/login': 'UserController.login',
    'GET /api/logout': 'UserController.logout',
    'POST /api/signup': 'UserController.create',
    //
    // Créer une image
    //
    'POST /api/imageData': 'ImageDataController.create',
    //
    // Liste des posts qui ont besoin d'aide
    //
    'GET /api/post/help': 'PostController.help',
    'GET /api/post/help/:limit': 'PostController.help',
    //
    // Liste des posts qui "mon style"
    //
    'GET /api/post/dressing': 'PostController.dressing',
    'GET /api/post/dressing/:limit': 'PostController.dressing',
    //
    // Ajouter une image à un post
    //
    'POST /api/post/:postId/images/:imageId': 'PostController.addToImages',
    //
    // Afficher une image
    //
    'GET /api/image/show/:imageId': 'ImageController.show',
    ////////////////////////////////////////////////////////////
    //

    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     *  If a request to a URL doesn't match any of the custom routes above, it  *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

    // Images
    'GET /image/show/:imageId': 'ImageController.show',
    'GET /image/upload': 'ImageController.upload',
    // Posts
    'GET /post/new': 'PostController.new',
    'GET /post/:id': 'PostController.show',
    // Compte utilisateur
    'GET /user/:id': 'UserController.show'
};
