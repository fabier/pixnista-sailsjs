/**
 * BodyTypeController
 *
 * @description :: Server-side logic for managing bodytypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /bodyType Get all BodyTypes
     * @apiName GetBodyTypes
     * @apiDescription Lists all available BodyTypes
     * @apiGroup BodyType
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of BodyTypes
     * @apiSuccess {Number} array.id BodyTypeId
     * @apiSuccess {String} array.name Name of BodyType
     * @apiSuccess {String} array.description Description of BodyType
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /bodyType/:id Get BodyType by Id
     * @apiName GetBodyTypeById
     * @apiDescription Gets a BodyType by its Id
     * @apiGroup BodyType
     * @apiPermission none
     *
     * @apiParam {Number} id BodyTypeId
     *
     * @apiSuccess {Number} array.id BodyTypeId
     * @apiSuccess {String} array.name Name of BodyType
     * @apiSuccess {String} array.description Description of BodyType
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // findOne: function
    // Interdit de créer un BodyType depuis l'API
    create: function (req, res) {
        res.forbidden();
    },
    // Interdit de mettre à jour un BodyType depuis l'API
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un BodyType depuis l'API
    destroy: function (req, res) {
        res.forbidden();
    }
};

