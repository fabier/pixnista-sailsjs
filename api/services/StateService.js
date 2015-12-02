/**
 * StateService
 *
 * @description :: Service for managing visibilities (public, friends, private)
 */
module.exports = {
    init: function (options, callback) {
        State.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("StateService : no states found, initializing...");
                StateService.createState([
                    {name: "active"},
                    {name: "inactive"},
                    {name: "deleted"}
                ], function (err, states) {
                    if (err) {
                        sails.log.warn("StateService : error initializing states !");
                    } else {
                        sails.log.info("StateService :", values.length, "states now initialized.");
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
    createState: function (options, callback) {
        State.create(options, function (err, post) {
            if (err) {
                sails.log.warn("StateService : Impossible to create a State", options, err);
            }
            callback(err, post);
        });
    }
};