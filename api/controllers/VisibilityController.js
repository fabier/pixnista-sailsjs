/**
 * VisibilityController
 *
 * @description :: Server-side logic for managing visibilities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /visibility Get all Visibilities
     * @apiName GetVisibilitys
     * @apiDescription Lists all available Visibilities
     * @apiGroup Visibility
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of Visibilities
     * @apiSuccess {Number} array.id VisibilityId
     * @apiSuccess {String} array.name Name of Visibility
     * @apiSuccess {String} array.description Description of Visibility
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /visibility/:id Get Visibility by Id
     * @apiName GetVisibilityById
     * @apiDescription Gets a Visibility by its Id
     * @apiGroup Visibility
     * @apiPermission none
     *
     * @apiParam {Number} id VisibilityId
     *
     * @apiSuccess {Number} array.id VisibilityId
     * @apiSuccess {String} array.name Name of Visibility
     * @apiSuccess {String} array.description Description of Visibility
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

