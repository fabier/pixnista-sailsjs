/**
 * VisibilityService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (options, callback) {
        Visibility.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("VisibilityService : no visibilities found, initializing...");
                VisibilityService.createVisibility([
                    {name: "public"},
                    {name: "restricted"},
                    {name: "private"}
                ], function (err, visibilities) {
                    if (err) {
                        sails.log.warn("VisibilityService : error initializing visibilities !");
                    } else {
                        sails.log.info(visibilities);
                        sails.log.info("VisibilityService : visibilities now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("VisibilityService :", values.length, "visibilities already initialized.");
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
    createVisibility: function (options, callback) {
        Visibility.create(options, function (err, post) {
            if (err) {
                sails.log.warn("VisibilityService : Impossible to create Visibility", options, err);
            }
            callback(err, post);
        });
    },
    public: function (options, callback) {
        Visibility.findOne({name: "public"}, callback);
    },
    private: function (options, callback) {
        Visibility.findOne({name: "private"}, callback);
    },
    restricted: function (options, callback) {
        Visibility.findOne({name: "restricted"}, callback);
    }
};