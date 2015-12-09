/**
 * ImageDataService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
var md5 = require('md5');
var fs = require('fs');

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
    },
    saveFile: function (file, callback) {
        fs.readFile(file.fd, function (err, data) {
            if (err) {
                throw err;
            }
            ImageData.create({
                data: data,
                md5: md5(data),
                type: file.type, // 'image/jpeg'
                filename: file.filename // 'DSC_O892.JPG'
            }, function (err, imageData) {
                if (err) {
                    callback(err);
                } else {
                    // Ce n'est pas important si la suppression ne fonctionne pas
                    // donc on ne met pas de callback à l'appel de la fonction
                    fs.unlink(file.fd); // Suppression du fichier temporaire
                    callback(null, imageData);
                }
            });
        });
    }
};