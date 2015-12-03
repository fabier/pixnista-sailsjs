/**
 * PostTypeService
 *
 * @description :: Service for managing postTypes (public, friends, private)
 */
module.exports = {
    init: function (options, callback) {
        PostType.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("PostTypeService : no postTypes found, initializing...");
                PostTypeService.createPostType([
                    {name: "help"},
                    {name: "dressing"}
                ], function (err, postTypes) {
                    if (err) {
                        sails.log.warn("PostTypeService : error initializing postTypes !");
                    } else {
                        sails.log.info("PostTypeService :", postTypes.length, "postTypes now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("PostTypeService :", values.length, "postTypes already initialized.");
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
    createPostType: function (options, callback) {
        PostType.create(options, function (err, post) {
            if (err) {
                sails.log.warn("PostTypeService : Impossible to create PostType", options, err);
            }
            callback(err, post);
        });
    },
    help: function (options, callback) {
        findByName('help', callback);
    },
    dressing: function (options, callback) {
        findByName('dressing', callback);
    }
};

function findByName(name, callback) {
    PostType.findOne({name: name}, callback);
}