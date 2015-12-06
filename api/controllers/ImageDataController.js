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
    create: function (req, res) {
        req.file('image').upload(function (err, files) {
            if (err) {
                return res.negotiate(err);
            }

            async.map(files, saveFile, function (err, imageDatas) {
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
    // Il est interdit de lister l'ensemble des images
    find: function (req, res) {
        res.forbidden();
    },
    // Fonction d'affichage d'une image
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


function saveFile(file, callback) {
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

