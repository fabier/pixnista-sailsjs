/**
 * ImageDataService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
var md5 = require('md5');

module.exports = {
    /**
     *
     * @param {type} options (contains : data, filename, imageType)
     * @param {type} callback
     * @returns {undefined}
     */
    create: function (options, callback) {
        options
        ImageData.create(options, function (err, post) {
            if (err) {
                sails.log.warn("ImageDataService : Impossible to create a ImageData", options, err);
            }
            callback(err, post);
        });
    }
};