/**
 * VoteReason
 *
 * @description :: Service for managing voteReasons (public, friends, private)
 */
module.exports = {
    init: function (options, callback) {
        VoteReason.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("VoteReason : no voteReasons found, initializing...");
                VoteReason.create([
                    {name: "style"},
                    {name: "color"},
                    {name: "size"},
                    {name: "shape"}
                ], function (err, voteReasons) {
                    if (err) {
                        sails.log.warn("VoteReason : error initializing voteReasons !");
                    } else {
                        sails.log.info("VoteReason :", voteReasons.length, "voteReasons now initialized.");
                    }
                    callback();
                });
            } else {
                sails.log.info("VoteReason :", values.length, "voteReasons already initialized.");
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
        VoteReason.create(options, function (err, post) {
            if (err) {
                sails.log.warn("VoteReason : Impossible to create VoteReason", options, err);
            }
            callback(err, post);
        });
    },
    style: function (options, callback) {
        findByName('style', callback);
    },
    color: function (options, callback) {
        findByName('color', callback);
    },
    shape: function (options, callback) {
        findByName('shape', callback);
    },
    size: function (options, callback) {
        findByName('size', callback);
    }
};

function findByName(name, callback) {
    VoteReason.findOne({name: name}, callback);
}