/**
 * StateService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (callback) {
        State.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("StateService : no states found, initializing...");
                StateService.create([
                    {name: "active"},
                    {name: "inactive"},
                    {name: "deleted"}
                ], function (err, states) {
                    if (err) {
                        sails.log.warn("StateService : error initializing states !");
                    } else {
                        sails.log.info("StateService :", states.length, "states now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("StateService :", values.length, "states already initialized.");
                callback();
            }
        });
    },
    /**
     *
     * @param {type} options (contains : name, description)
     * @param {type} callback
     * @returns {undefined}
     */
    create: function (options, callback) {
        State.create(options, function (err, post) {
            if (err) {
                sails.log.warn("StateService : Impossible to create a State", options, err);
            }
            callback(err, post);
        });
    }
};