/**
 * Module dependencies
 */
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil'),
        _ = require('lodash'),
        pluralize = require('pluralize');

// Function declaration
function randomBlueprint(req, res) {
    var Model = actionUtil.parseModel(req);
    Model.count(function (err, elementCount) {
        if (err) {
            res.negotiate(err);
        } else {
            var skipCount = Math.floor(elementCount * Math.random());
            Model.find().skip(skipCount).limit(1).exec(function (err, results) {
                if (err) {
                    res.negotiate(err);
                } else {
                    res.json(results);
                }
            });
        }
    });
}

module.exports = function (sails) {
    var config = sails.config.blueprints;
    return {
        initialize: function (cb) {
            sails.on('router:before', function () {
                var randomFn = sails.middleware.blueprints.random || randomBlueprint;
                _.forEach(sails.models, function (model) {
//                    if (!_.get(sails.middleware.controllers, model.identity))
//                        return;
                    var controller = sails.middleware.controllers[model.identity]
                    if (controller === undefined)
                        return;
                    var baseRoute = [config.prefix, model.identity].join('/');
                    if (config.pluralize) {
                        baseRoute = pluralize(baseRoute);
                    }
                    var route = baseRoute + '/random';
                    sails.router.bind(route, randomFn, null, {controller: model.identity});
                });
            });
            cb();
        }
    }
};


