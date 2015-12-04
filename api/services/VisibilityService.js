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
                VisibilityService.create([
                    {name: "public"},
                    {name: "followers"},
                    {name: "private"}
                ], function (err, visibilities) {
                    if (err) {
                        sails.log.warn("VisibilityService : error initializing visibilities !");
                    } else {
                        sails.log.info("VisibilityService :", visibilities.length, "visibilities now initialized.");
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
    create: function (options, callback) {
        Visibility.create(options, function (err, post) {
            if (err) {
                sails.log.warn("VisibilityService : Impossible to create Visibility", options, err);
            }
            callback(err, post);
        });
    },
    public: function (options, callback) {
        findByName('public', callback);
    },
    private: function (options, callback) {
        findByName('private', callback);
    },
    followers: function (options, callback) {
        findByName('followers', callback);
    }
};

function findByName(name, callback) {
    Visibility.findOne({name: name}, callback);
}