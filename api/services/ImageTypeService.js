/**
 * ImageTypeService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (options, callback) {
        ImageType.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("ImageTypeService : no imageTypes found, initializing...");
                ImageTypeService.createImageType([
                    {name: "JPEG", extension: "jpg"},
                    {name: "PNG", extension: "png"},
                    {name: "GIF", extension: "gif"}
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
    createImageType: function (options, callback) {
        ImageType.create(options, function (err, post) {
            if (err) {
                sails.log.warn("ImageTypeService : Impossible to create a ImageType", options, err);
            }
            callback(err, post);
        });
    },
    jpg: function (options, callback) {
        findByName('JPEG', callback);
    },
    jpeg: function (options, callback) {
        findByName('JPEG', callback);
    },
    png: function (options, callback) {
        findByName('JPEG', callback);
    },
    gif: function (options, callback) {
        findByName('JPEG', callback);
    }
};

function findByName(name, callback) {
    ImageType.findOne({name: name}, callback);
}