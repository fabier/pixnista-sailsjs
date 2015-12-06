/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * Il est interdit de lister les images depuis l'API Rest
     */
    find: function (req, res) {
        res.forbidden();
    },
    show: function (req, res) {
        Image.findOne(req.param('id')).populate('imageData').exec(function (err, image) {
            if (err) {
                res.negotiate(err);
            } else {
                if (image) {
                    var imageData = image.imageData;
                    if (imageData) {
                        res.set('Content-Type', imageData.type);
                        res.send(imageData.data);
                    } else {
                        // Pas de contenu trouvé
                        res.notFound();
                    }
                } else {
                    // Pas de contenu trouvé
                    res.notFound();
                }
            }
        });
    }
};

