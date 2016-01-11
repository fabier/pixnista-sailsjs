/**
 * StateController
 *
 * @description :: Server-side logic for managing states
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {get} /state Get all States
     * @apiName GetStates
     * @apiDescription Lists all available States
     * @apiGroup State
     * @apiPermission none
     *
     * @apiSuccess {Object[]} array Array of States
     * @apiSuccess {Number} array.id StateId
     * @apiSuccess {String} array.name Name of State
     * @apiSuccess {String} array.description Description of State
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // find: function
    /**
     * @api {get} /state/:id Get State by Id
     * @apiName GetStateById
     * @apiDescription Gets a State by its Id
     * @apiGroup State
     * @apiPermission none
     *
     * @apiParam {Number} id StateId
     *
     * @apiSuccess {Number} array.id StateId
     * @apiSuccess {String} array.name Name of State
     * @apiSuccess {String} array.description Description of State
     * @apiSuccess {Date} array.createdAt Creation date
     * @apiSuccess {Date} array.updatedAt Last update date
     *
     * @apiSampleRequest off
     *
     * @apiVersion 0.0.0
     */
    // findOne: function
    // Interdit de créer un State depuis l'API
    create: function (req, res) {
        res.forbidden();
    },
    // Interdit de mettre à jour un State depuis l'API
    update: function (req, res) {
        res.forbidden();
    },
    // Interdit de supprimer un State depuis l'API
    destroy: function (req, res) {
        res.forbidden();
    }
};

