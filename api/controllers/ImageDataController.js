/**
 * ImageDataController
 *
 * @description :: Server-side logic for managing imagedatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var md5 = require('md5');
var async = require('async');
var fs = require('fs');
module.exports = {
    // Interdit de lister les ImageData depuis l'API
    find: function (req, res) {
        res.forbidden();
    },
    /**
     * @api {post} /imageData Create a new ImageData
     * @apiName CreateImageData
     * @apiDescription Creates a new ImageData, storing only binary data.s
     * @apiGroup Image
     * @apiPermission USER
     *
     * @apiParam {File} image ImageData as file, in <code>&lt;input type="file"/&gt;</code>
     *
     * @apiSuccess {Number} id The ImageDataId created
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    create: function (req, res) {
        req.file('image').upload(function (err, files) {
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
                    return res.status(201).json(imageDatas);
                }
            });
        });
    },
    /**
     * @api {get} /imageData/:imageDataId Get ImageData Binary data
     * @apiName GetImageData
     * @apiDescription Gets ImageData as binary stream
     * @apiGroup Image
     * @apiPermission USER
     *
     * @apiParam {Number} imageDataId The ImageDataId to get
     *
     * @apiSuccess {Byte} data The binary data for this ImageData
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // Fonction d'affichage d'une imageData
    findOne: function (req, res) {
        ImageData.findOne(req.param('id'), function (err, imageData) {
            if (err) {
                res.negotiate(err);
            } else if (imageData) {
                res.set('Content-Type', imageData.type);
                res.send(imageData.data);
            } else {
                // Pas de contenu trouvé
                res.notFound();
            }
        });
    },
    // Il est interdit de mettre à jour les données d'une image
    update: function (req, res) {
        res.forbidden();
    },
    // Il est interdit de supprimer les données d'une image
    destroy: function (req, res) {
        res.forbidden();
    }
};


