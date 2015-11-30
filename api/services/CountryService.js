/**
 * CountryService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (options, callback) {
        Country.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("CountryService : no countries found, initializing...");
                CountryService.createCountry([
                    {name: "France", nativeName: "France", isocode31661: "FR"},
                    {name: "England", nativeName: "England", isocode31661: "EN"}
                ], function (err, countries) {
                    if (err) {
                        sails.log.warn("CountryService : error initializing countries !");
                    } else {
                        sails.log.info(countries);
                        sails.log.info("CountryService : countries now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("CountryService :", values.length, "countries already initialized.");
                callback();
            }
        });
    },
    /**
     *
     * @param {type} options (contains : name, description)
     * @param {type} callback
     * @returns {undefined}
     */
    createCountry: function (options, callback) {
        Country.create(options, function (err, post) {
            if (err) {
                sails.log.warn("CountryService : Impossible to create a Country", options, err);
            }
            callback(err, post);
        });
    }
};