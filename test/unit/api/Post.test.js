var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var async = require('async');
var pixnista = require('../../fixtures/pixnista.js');

// Création d'un post (données aléatoires générées)
var post = {
    title: faker.lorem.sentence(4),
    content: faker.lorem.sentences(),
    creator: null
};

var image;

// Description des test unitaires
describe('Post API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        async.parallel({
            user: function (callback) {
                pixnista.findRandomUser(null, callback);
            },
            image: function (callback) {
                pixnista.findRandomImage(null, callback);
            }
        }, function (err, results) {
            post.creator = results.user.id;
            image = results.image;
            done();
        });
    });

    it('should not be a able to list Posts', function (done) {
        request.get('/post').end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should be able to post a new Post', function (done) {
        request.post('/post').send(post).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 201);
            res.should.have.property('body').have.property('id');
            post.id = res.body.id;
            done();
        });
    });
    it('should be able to get the newly created Post', function (done) {
        request.get('/post/' + post.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to delete a Post', function (done) {
        request.delete('/post/' + post.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to get a deleted Post', function (done) {
        request.get('/post/' + post.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 404, done);
        });
    });
});