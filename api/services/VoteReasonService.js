/**
 * VoteReason
 *
 * @description :: Service for managing voteReasons (public, friends, private)
 */
module.exports = {
    init: function (callback) {
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
        VoteReason.create(options, function (err, voteReason) {
            if (err) {
                sails.log.warn("VoteReason : Impossible to create VoteReason", options, err);
            }
            callback(err, voteReason);
        });
    },
    find: function (options, callback) {
        VoteReason.find(options, function (err, voteReasons) {
            if (err) {
                sails.log.warn("VoteReason : Impossible to find VoteReasons", options, err);
            }
            callback(err, voteReasons);
        });
    },
    style: function (callback) {
        findByName('style', callback);
    },
    color: function (callback) {
        findByName('color', callback);
    },
    shape: function (callback) {
        findByName('shape', callback);
    },
    size: function (callback) {
        findByName('size', callback);
    }
};

function findByName(name, callback) {
    VoteReason.findOne({name: name}, callback);
}