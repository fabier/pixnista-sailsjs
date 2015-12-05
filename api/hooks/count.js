/**
 * Module dependencies
 */
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil'),
        _ = require('lodash'),
        pluralize = require('pluralize');

// Function declaration
function countBlueprint(req, res) {
    var Model = actionUtil.parseModel(req);
    Model.count(function (err, count) {
        if (err) {
            res.negotiate(err);
        } else {
            res.ok({
                count: count
            });
        }
    });
}

module.exports = function (sails) {
    var config = sails.config.blueprints;
    return {
        initialize: function (cb) {
            sails.on('router:before', function () {
                var countFn = sails.middleware.blueprints.count || countBlueprint;
                _.forEach(sails.models, function (model) {
//                    if (!_.get(sails.middleware.controllers, model.identity))
//                        return;
                    var controller = sails.middleware.controllers[model.identity];
                    if (controller === undefined)
                        return;
                    var baseRoute = [config.prefix, model.identity].join('/');
                    if (config.pluralize) {
                        baseRoute = pluralize(baseRoute);
                    }
                    var route = baseRoute + '/count';
                    sails.router.bind(route, countFn, null, {controller: model.identity});
                });
            });
            cb();
        }
    };
};


