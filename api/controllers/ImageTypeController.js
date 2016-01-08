/**
 * ImageTypeController
 *
 * @description :: Server-side logic for managing imagetypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /imageType Get all ImageTypes
     * @apiName GetImageTypes
     * @apiDescription Lists all available ImageTypes
     * @apiGroup ImageType
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of ImageTypes
     * @apiSuccess {Number} array.id ImageTypeId
     * @apiSuccess {String} array.name Name of ImageType
     * @apiSuccess {String} array.description Description of ImageType
     * @apiSuccess {Array} array.extensions Extensions available for ImageType
     * @apiSuccess {Array} array.mimetypes MimeTypes available for ImageType
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /imageType/:id Get ImageType by Id
     * @apiName GetImageTypeById
     * @apiDescription Gets a ImageType by its Id
     * @apiGroup ImageType
     * @apiPermission none
     *
     * @apiParam {Number} id ImageTypeId
     *
     * @apiSuccess {Number} array.id ImageTypeId
     * @apiSuccess {String} array.name Name of ImageType
     * @apiSuccess {String} array.description Description of ImageType
     * @apiSuccess {Array} array.extensions Extensions available for ImageType
     * @apiSuccess {Array} array.mimetypes MimeTypes available for ImageType
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

