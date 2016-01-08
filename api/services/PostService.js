/**
 * PostService
 *
 * @description :: Service for managing posts
 */
module.exports = {
    create: function (options, callback) {
        Post.create(options, function (err, post) {
            if (err) {
                sails.log.warn("PostService : Impossible to create Post", options, err);
            }
            callback(err, post);
        });
    }
};