/**
 * CountryController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /country Get all Countries
     * @apiName GetCountries
     * @apiDescription Lists all Countries
     * @apiGroup Country
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of Countries
     * @apiSuccess {Number} array.id CountryId
     * @apiSuccess {String} array.name Name of Country
     * @apiSuccess {String} array.description Description of Country
     * @apiSuccess {String} array.nativeName Name of Country in native language
     * @apiSuccess {String} array.isocode31661 ISO Code 31661
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /country/:id Get Country by Id
     * @apiName GetCountryById
     * @apiDescription Gets a Country by its Id
     * @apiGroup Country
     * @apiPermission none
     *
     * @apiParam {Number} id CountryId
     *
     * @apiSuccess {Number} array.id CountryId
     * @apiSuccess {String} array.name Name of Country
     * @apiSuccess {String} array.description Description of Country
     * @apiSuccess {String} array.nativeName Name of Country in native language
     * @apiSuccess {String} array.isocode31661 ISO Code 31661
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
    update: function (req, res) {
        res.forbidden();
    },
    destroy: function (req, res) {
        res.forbidden();
    }
};

