/**
 * FashionStyleController
 *
 * @description :: Server-side logic for managing fashionstyles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /fashionStyle Get all FashionStyles
     * @apiName GetFashionStyles
     * @apiDescription Lists all FashionStyles
     * @apiGroup FashionStyle
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of FashionStyles
     * @apiSuccess {Number} array.id FashionStyleId
     * @apiSuccess {String} array.name Name of FashionStyle
     * @apiSuccess {String} array.description Description of FashionStyle
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /fashionStyle/:id Get FashionStyle by Id
     * @apiName GetFashionStyleById
     * @apiDescription Gets a FashionStyle by its Id
     * @apiGroup FashionStyle
     * @apiPermission none
     *
     * @apiParam {Number} id FashionStyleId
     *
     * @apiSuccess {Number} array.id FashionStyleId
     * @apiSuccess {String} array.name Name of FashionStyle
     * @apiSuccess {String} array.description Description of FashionStyle
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // findOne: function
    // Interdit de créer un FashionStyle depuis l'API
    create: function (req, res) {
        res.forbidden();
    },
    // Interdit de mettre à jour un FashionStyle depuis l'API
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un FashionStyle depuis l'API
    destroy: function (req, res) {
        res.forbidden();
    }
};

