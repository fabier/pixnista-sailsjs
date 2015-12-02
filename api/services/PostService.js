/**
 * PostService
 *
 * @description :: Service for managing posts
 */
module.exports = {
    init: function (options, callback) {
        Post.find(null, function (err, values) {
            if (values.length === 0) {
                sails.log.info("PostService : no posts found, initializing...");
                User.find(null, function (err, users) {
                    if (err || users.length === 0) {
                        sails.log.warn("PostService : Impossible to fetch a user !", err, users);
                        callback();
                    } else {
                        PostService.createPost([{
                                title: "Mon premier post",
                                content: "Il s'agit ici d'avoir des données initiales...",
                                creator: users[Math.floor(Math.random() * users.length)],
                                visibility: VisibilityService.public()
                            }], function (err, posts) {
                            if (err) {
                                sails.log.warn("PostService : error initializing posts !");
                            } else {
                                sails.log.info("PostService :", posts.length, "posts now initialized.");
                            }
                            callback();
                        });
                    }
                });
            } else {
                sails.log.info("PostService :", values.length, "posts already initialized.");
                callback();
            }
        });
    },
    /**
     *
     * @param {type} options (contains : title, content, visibility)
     * @param {type} callback
     * @returns {undefined}
     */
    createPost: function (options, callback) {
        Post.create(options, function (err, post) {
            if (err) {
                sails.log.warn("PostService : Impossible to create Post", options, err);
            }
            callback(err, post);
        });
    }
};