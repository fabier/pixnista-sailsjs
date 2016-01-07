/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

var faker = require('faker');

module.exports = require('waterlock').waterlocked({
    /* e.g.
     action: function(req, res){

     }
     */

    login: function (req, res) {
        res.view("auth/login", {faker: faker});
    }

});