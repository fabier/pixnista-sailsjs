var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var async = require('async');
var pixnista = require('../../fixtures/pixnista.js');

// Création d'un post (données aléatoires générées)
var image = {
    name: faker.lorem.sentence(4, 0),
    filename: faker.lorem.sentence(1, 0) + '.jpg',
    description: faker.lorem.sentence(),
    creator: null
};

// Description des test unitaires
describe('Image API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        async.parallel({
            user: function (callback) {
                pixnista.findRandomUser(null, callback);
            }
        }, function (err, results) {
            image.creator = results.user.id;
            done();
        });
    });

    it('should not be a able to list Images', function (done) {
        request.get('/image').end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should be able to post a new Image', function (done) {
        request.post('/image').send(image).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 201);
            res.should.have.property('body').have.property('id');
            image.id = res.body.id;
            done();
        });
    });
    it('should be able to get the newly created Image', function (done) {
        request.get('/image/' + image.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to delete a Image', function (done) {
        request.delete('/image/' + image.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to get a deleted Image', function (done) {
        request.get('/image/' + image.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 404, done);
        });
    });
});