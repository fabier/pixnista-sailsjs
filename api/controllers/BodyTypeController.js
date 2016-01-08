/**
 * BodyTypeController
 *
 * @description :: Server-side logic for managing bodytypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /bodyType Get all bodyTypes
     * @apiName GetBodyTypes
     * @apiDescription Lists all available bodyTypes
     * @apiGroup BodyType
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of bodyTypes
     * @apiSuccess {Number} array.id BodyTypeId
     * @apiSuccess {String} array.name Name of bodyType
     * @apiSuccess {String} array.description Description of bodyType
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /bodyType/:id Get bodyType by Id
     * @apiName GetBodyTypeById
     * @apiDescription Gets a BodyType by its Id
     * @apiGroup BodyType
     * @apiPermission none
     *
     * @apiParam {Number} id BodyTypeId
     *
     * @apiSuccess {Number} array.id BodyTypeId
     * @apiSuccess {String} array.name Name of bodyType
     * @apiSuccess {String} array.description Description of bodyType
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

