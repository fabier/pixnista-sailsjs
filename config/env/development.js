/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
    connections: {
        // Chaine de connexion pour la base de données de dev
        "mongodb-dev": {
            adapter: 'sails-mongo',
            host: 'localhost',
            port: 27017,
            // user: 'username',
            // password: 'password',
            database: 'pixnista-dev'
        }
    },
    /***************************************************************************
     * Set the default database connection for models in the development       *
     * environment (see config/connections.js and config/models.js )           *
     ***************************************************************************/

    models: {
        connection: 'mongodb-dev'
//        migrate: 'drop'
    },
    /***************************************************************************
     * Set the port in the development environment to 8080                     *
     ***************************************************************************/

    port: 8080,
    /***************************************************************************
     * Set the log level in production environment to "silent"                 *
     ***************************************************************************/

    // log: {
    //   level: "silent"
    // }

    waterlock: {
        baseUrl: 'http://localhost:8000'
    }
};
