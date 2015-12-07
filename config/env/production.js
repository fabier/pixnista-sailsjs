/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
    connections: {
        // Chaine de connexion de production
        mongodb: {
            adapter: 'sails-mongo',
            host: 'ds027505.mongolab.com',
            port: 27505,
            user: 'heroku_c24r5xn7',
            password: '9a609daifakdpmjnmu8tibrlqs',
            database: 'heroku_c24r5xn7'
        }
    },
    /***************************************************************************
     * Set the default database connection for models in the production        *
     * environment (see config/connections.js and config/models.js )           *
     ***************************************************************************/

    models: {
        connection: 'mongodb',
        migrate: 'drop'
    },
    /***************************************************************************
     * Set the port in the production environment to 80                        *
     ***************************************************************************/

    port: 80

            /***************************************************************************
             * Set the log level in production environment to "silent"                 *
             ***************************************************************************/

            // log: {
            //   level: "silent"
            // }

};
