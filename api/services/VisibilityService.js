/**
 * VisibilityService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (callback) {
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
    create: function (options, callback) {
        Visibility.create(options, function (err, post) {
            if (err) {
                sails.log.warn("VisibilityService : Impossible to create Visibility", options, err);
            }
            callback(err, post);
        });
    },
    public: function (callback) {
        findByName('public', callback);
    },
    private: function (callback) {
        findByName('private', callback);
    },
    followers: function (callback) {
        findByName('followers', callback);
    }
};

function findByName(name, callback) {
    Visibility.findOne({name: name}, callback);
}