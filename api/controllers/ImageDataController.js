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
    /**
     * Fonction de création d'une image pour l'API
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
    // Il est interdit de lister l'ensemble des imageDatas
    find: function (req, res) {
        res.forbidden();
    },
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


