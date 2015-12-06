/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

// Pour lancer les initialisations dans un ordre prédéfini
var async = require('async');

module.exports.bootstrap = function (cb) {

    // On regarde s'il y a déjà des données dans la base de données
    User.count(function (err, count) {
        if (err) {
            throw err;
        } else {
            if (count === 0) {
                // Initialisation des listes "statiques"
                sails.log.info("#######################");
                sails.log.info("## DEBUT : Bootstrap ##");
                sails.log.info("#######################");

                // Pas encore de données en base
                // On initialise
                async.parallel([
                    LanguageService.init,
                    CountryService.init,
                    VisibilityService.init,
                    BodyTypeService.init,
                    FashionStyleService.init,
                    StateService.init,
                    VoteReasonService.init,
                    ImageTypeService.init,
                    PostTypeService.init,
                    UserService.init,
                ], function (err) {
                    if (err) {
                        throw err;
                    }
                    sails.log.info("#####################");
                    sails.log.info("## FIN : Bootstrap ##");
                    sails.log.info("#####################");
                    // It's very important to trigger this callback method when you are finished
                    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
                    cb();

                    if (sails.config.environment === 'development') {
                        setTimeout(function () {
                            FakerService.init(function () {});
                        }, 1000);
                    }
                });
            } else {
                sails.log.info("Bootstrap.js : Données déjà initialisées");
                cb();
            }
        }
    });
};