/**
 * LanguageController
 *
 * @description :: Server-side logic for managing languages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /language Get all Languages
     * @apiName GetLanguages
     * @apiDescription Lists all available Languages
     * @apiGroup Language
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of Languages
     * @apiSuccess {Number} array.id LanguageId
     * @apiSuccess {String} array.name Name of Language
     * @apiSuccess {String} array.description Description of Language
     * @apiSuccess {String} array.nativeName Native name of Language
     * @apiSuccess {String} array.isocode6391 ISO Code 6391 for Language
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /language/:id Get Language by Id
     * @apiName GetLanguageById
     * @apiDescription Gets a Language by its Id
     * @apiGroup Language
     * @apiPermission none
     *
     * @apiParam {Number} id LanguageId
     *
     * @apiSuccess {Number} array.id LanguageId
     * @apiSuccess {String} array.name Name of Language
     * @apiSuccess {String} array.description Description of Language
     * @apiSuccess {String} array.nativeName Native name of Language
     * @apiSuccess {String} array.isocode6391 ISO Code 6391 for Language
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // findOne: function
    create: function (req, res) {
        res.forbidden();
    },
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
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
    update: function (req, res) {
        res.forbidden();
    },
    /**
     * @apiIgnore Not documented yet
     * @api {get} /XXXTODOXXX XXXTODOXXX
     * @apiName XXXTODOXXX
     * @apiDescription XXXTODOXXX
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
    destroy: function (req, res) {
        res.forbidden();
    }
};

