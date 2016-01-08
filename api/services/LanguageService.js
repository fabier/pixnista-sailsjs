/**
 * LanguageService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (callback) {
        Language.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("LanguageService : no languages found, initializing...");
                LanguageService.create([
                    {name: "French", nativeName: "Francais", isocode6391: "fr"},
                    {name: "English", nativeName: "English", isocode6391: "en"}
                ], function (err, languages) {
                    if (err) {
                        sails.log.warn("LanguageService : error initializing languages !");
                    } else {
                        sails.log.info("LanguageService :", languages.length, "languages now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("LanguageService :", values.length, "languages already initialized.");
                callback();
            }
        });
    },
    create: function (options, callback) {
        Language.create(options, function (err, post) {
            if (err) {
                sails.log.warn("LanguageService : Impossible to create a Language", options, err);
            }
            callback(err, post);
        });
    }
};