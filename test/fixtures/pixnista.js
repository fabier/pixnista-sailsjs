/**
 * Pixnista Fixtures
 * Définit des fonction utiles dans les tests de l'API Pixnista
 */
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var _ = require('underscore');

function baseURL() {
    // Base URL pour les tests
    return 'http://localhost:8080';
}

module.exports = {
// Function utilitaire pour gérer les réponses du serveur
    handleResponseCheckStatusCode: function (err, res, statusCode, done) {
        if (err) {
            throw err;
        } else {
            if (statusCode !== undefined) {
                res.should.have.property('status').equal(statusCode);
            }
            if (typeof done === 'function') {
                done();
            }
        }
    },
    baseURL: baseURL,
    createUser: function (options, callback) {
        var user = _.extend({
            name: faker.name.findName(),
            password: randomId(18),
            email: faker.internet.email()
        }, options);

        request(baseURL()).post('/user').send(user).end(function (err, res) {
            user.id = res.body.id;
            callback(err, user);
        });
    },
    findUser: function (options, callback) {
        request(baseURL()).get('/user').end(function (err, res) {
            if (err) {
                throw err;
            }
            var users = res.body;
            callback(err, users[Math.floor(Math.random() * users.length)]);
        });
    },
    createPost: function (options, callback) {
        findUser({}, function (err, user) {
            var post = _.extend({
                title: faker.lorem.sentence(4),
                content: faker.lorem.sentences(),
                creator: user.id
            }, options);
            request(baseURL()).post('/post').send(post).end(function (err, res) {
                post.id = res.body.id;
                callback(err, post);
            });
        });
    },
    findPost: function (options, callback) {
        request(baseURL()).get('/post').end(function (err, res) {
            if (err) {
                throw err;
            }
            var posts = res.body;
            callback(err, posts[Math.floor(Math.random() * posts.length)]);
        });
    },
    createImage: function (options, callback) {
        findUser({}, function (err, user) {
            var image = _.extend({
                name: faker.lorem.sentence(4, 0),
                filename: faker.lorem.sentence(1, 0) + '.jpg',
                description: faker.lorem.sentence(),
                creator: user.id
            }, options);
            request(baseURL()).post('/image').send(image).end(function (err, res) {
                image.id = res.body.id;
                callback(err, image);
            });
        });
    },
    findImage: function (options, callback) {
        request(baseURL()).get('/image').end(function (err, res) {
            if (err) {
                throw err;
            }
            var images = res.body;
            callback(err, images[Math.floor(Math.random() * images.length)]);
        });
    },
    findVoteReason: function (options, callback) {
        request(baseURL()).get('/voteReason').end(function (err, res) {
            if (err) {
                throw err;
            }
            var voteReasons = res.body;
            callback(err, voteReasons[Math.floor(Math.random() * voteReasons.length)]);
        });
    }
};