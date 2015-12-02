/**
 * FashionStyleService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (options, callback) {
        FashionStyle.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("FashionStyleService : no fashionStyles found, initializing...");
                FashionStyleService.createFashionStyle([
                    {name: "bohemian"},
                    {name: "arty"},
                    {name: "chic"},
                    {name: "classic"},
                    {name: "exotic"},
                    {name: "flamboyant"},
                    {name: "glamourous"},
                    {name: "romantic"},
                    {name: "sexy"},
                    {name: "sophisticated"},
                    {name: "western"},
                    {name: "traditional"},
                    {name: "preppy"},
                    {name: "punk"},
                    {name: "tomboy"},
                    {name: "rocker"},
                    {name: "goth"}
                ], function (err, fashionStyles) {
                    if (err) {
                        sails.log.warn("FashionStyleService : error initializing fashionStyles !");
                    } else {
                        sails.log.info("FashionStyleService :", values.length, "fashionStyles now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("FashionStyleService :", values.length, "fashionStyles already initialized.");
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
    createFashionStyle: function (options, callback) {
        FashionStyle.create(options, function (err, post) {
            if (err) {
                sails.log.warn("FashionStyleService : Impossible to create FashionStyle", options, err);
            }
            callback(err, post);
        });
    }
};