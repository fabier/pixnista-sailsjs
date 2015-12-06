/**
 * ImageTypeService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (callback) {
        ImageType.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("ImageTypeService : no imageTypes found, initializing...");
                ImageTypeService.create([
                    {name: "JPEG", extensions: ["jpg", 'jpeg']},
                    {name: "PNG", extensions: ["png"]},
                    {name: "GIF", extensions: ["gif"]}
                ], function (err, imageTypes) {
                    if (err) {
                        sails.log.warn("ImageTypeService : error initializing imageTypes !");
                    } else {
                        sails.log.info("ImageTypeService :", imageTypes.length, "imageTypes now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("ImageTypeService :", values.length, "imageTypes already initialized.");
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
        ImageType.create(options, function (err, post) {
            if (err) {
                sails.log.warn("ImageTypeService : Impossible to create a ImageType", options, err);
            }
            callback(err, post);
        });
    },
    jpg: function (callback) {
        findByName('JPEG', callback);
    },
    jpeg: function (callback) {
        findByName('JPEG', callback);
    },
    png: function (callback) {
        findByName('JPEG', callback);
    },
    gif: function (callback) {
        findByName('JPEG', callback);
    }
};

function findByName(name, callback) {
    ImageType.findOne({name: name}, callback);
}