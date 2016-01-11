/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @api {post} /image Create a new Image
     * @apiName CreateImage
     * @apiDescription Creates a new Image, storing all its metadata.<br/>
     * You need to create ImageData before calling this method, or have an already ImageData ID available.
     * @apiGroup Image
     * @apiPermission USER
     *
     * @apiParam {String} name Name of the Image
     * @apiParam {String} filename Original filename of the Image
     * @apiParam {String} description Description of the Image, if any
     * @apiParam {Number} imageData ImageDataId containing data contents for this Image
     * @apiParam {Number} imageType ImageTypeId of this Image
     *
     * @apiSuccess {Number} id The newly ImageId created
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // create: function
    /**
     * @api {put} /image/:id Update an Image
     * @apiName UpdateImage
     * @apiDescription Updates an Image, changing some or all of its metadata.
     * @apiGroup Image
     * @apiPermission USER
     *
     * @apiParam {Number} :id ImageId of the Image to update
     * @apiParam {String} name Name of the Image
     * @apiParam {String} filename Original filename of the Image
     * @apiParam {String} description Description of the Image, if any
     * @apiParam {Number} imageData ImageDataId containing data contents for this Image
     * @apiParam {Number} imageType ImageTypeId of this Image
     *
     * @apiSuccess {Number} id The newly ImageId created
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // update: function
    /**
     * @api {delete} /image/:id Delete an Image
     * @apiName DeleteImage
     * @apiDescription Deletes an existing Image
     * @apiGroup Image
     * @apiPermission USER
     *
     * @apiParam {Number} :id ImageId of the Image to delete
     *
     * @apiSuccess {Number} id The ImageId deleted
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // destroy: function
    /**
     * @api {get} /image/show/:id Show an Image
     * @apiName ShowImage
     * @apiDescription Get ImageData of the Image as Binary data.<br/>
     * Useful for <code>&lt;img src="/api/image/show/1234"/&gt;</code> in HTML.
     * @apiGroup Image
     * @apiPermission USER
     *
     * @apiParam {Number} :id ImageId of the Image to delete
     *
     * @apiSuccess {Number} id The ImageId deleted
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
    /**
     * @api {post} /image Upload a new Image
     * @apiName UploadImage
     * @apiDescription Uploads a new Image using only binary data.<br/>
     * It automatically finds the ImageType and filename, but isn't capable to store description.<br/>
     * The typical use is in a <code>&lt;form&gt;</code>, using a <code>&lt;input type="file"/&gt;</code>.
     * @apiGroup Image
     * @apiPermission USER
     *
     * @apiParam {Number} file The file to upload.
     *
     * @apiSuccess {Number} id The ImageId deleted
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
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

