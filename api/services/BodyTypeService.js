/**
 * BodyTypeService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (options, callback) {
        BodyType.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("BodyTypeService : no bodyTypes found, initializing...");
                BodyTypeService.createBodyType([
                    {name: "skinny"},
                    {name: "average"},
                    {name: "big"}
                ], function (err, bodyTypes) {
                    if (err) {
                        sails.log.warn("BodyTypeService : error initializing bodyTypes !");
                    } else {
                        sails.log.info("BodyTypeService :", bodyTypes.length, "bodyTypes now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("BodyTypeService :", values.length, "bodyTypes already initialized.");
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
    createBodyType: function (options, callback) {
        BodyType.create(options, function (err, post) {
            if (err) {
                sails.log.warn("BodyTypeService : Impossible to create a BodyType", options, err);
            }
            callback(err, post);
        });
    }
};