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

module.exports.bootstrap = function (cb) {
    sails.sequence = require('sequence');

    // Pour lancer les initialisations dans un ordre prédéfini
    var sequence = sails.sequence.Sequence.create();

    // Initialisation des listes "statiques"
    sequence.then(function (next) {
        sails.log.info("#######################");
        sails.log.info("## DEBUT : Bootstrap ##");
        sails.log.info("#######################");
        next();
    }).then(function (next) {
        LanguageService.init(null, next);
    }).then(function (next) {
        CountryService.init(null, next);
    }).then(function (next) {
        VisibilityService.init(null, next);
    }).then(function (next, err) {
        BodyTypeService.init(null, next);
    }).then(function (next, err) {
        FashionStyleService.init(null, next);
    }).then(function (next, err) {
        StateService.init(null, next);
    }).then(function (next, err) {
        VoteReasonService.init(null, next);
    }).then(function (next, err) {
        ImageTypeService.init(null, next);
    }).then(function (next, err) {
        UserService.init(null, next);
    }).then(function (next, err) {
        PostService.init(null, next);
    }).then(function (next, err) {
        sails.log.info("#####################");
        sails.log.info("## FIN : Bootstrap ##");
        sails.log.info("#####################");
        next();
    }).then(function (next, err) {
        // It's very important to trigger this callback method when you are finished
        // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
        cb();
    });


};