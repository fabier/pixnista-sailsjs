/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription It is forbidden to list images from REST API
     * @apiGroup XXXTODOXXX
     * @apiPermission Forbidden
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission none
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // create: function
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission none
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // update: function
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission none
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // destroy: function
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
     * @apiGroup XXXTODOXXX
     * @apiPermission none
     *
     * @apiParam {Number} XXXTODOXXX
     * @apiParam {Number} XXXTODOXXX
     *
     * @apiSuccess {String} XXXTODOXXX
     * @apiSuccess {String} XXXTODOXXX
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
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
    },
    // Pour l'upload de nouvelles images
    upload: function (req, res) {
        req.file('file').upload(function (err, files) {
            if (err) {
                return res.negotiate(err);
            }

            async.map(files, ImageDataService.saveFile, function (err, imageDatas) {
                if (err) {
                    res.negotiate(err);
                } else {
                    // Suppression de la donnée dans le retour de l'appel
                    // (pour éviter des flux trop importants)
                    imageDatas.forEach(function (e) {
                        delete e.data;
                    });
                    var images = [];
                    async.each(imageDatas, function (imageData, callback) {
                        ImageType.find({
                            'mimetypes': {
                                contains: imageData.type
                            }
                        }, function (err, imageTypes) {
                            if (err) {
                                res.negotiate(err);
                            } else if (imageTypes.length === 1) {
                                var imageType = imageTypes[0];
                                Image.create({
                                    name: imageData.filename,
                                    filename: imageData.filename,
                                    creator: req.session.user.id,
                                    imageData: imageData.id,
                                    imageType: imageType.id
                                }, function (err, image) {
                                    images.push(image);
                                    callback(err, image);
                                });
                            } else {
                                res.serverError("Found none or multiple imageTypes for MIME Type :", imageData.type)
                            }
                        });
                    }, function (err, result) {
                        if (err) {
                            res.negotiate(err);
                        } else {
                            return res.json({
                                images: images
                            });
                        }
                    });
                }
            });
        });
    }
};

