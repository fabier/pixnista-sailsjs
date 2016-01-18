var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var async = require('async');
var pixnista = require('../../fixtures/pixnista.js');

// Création d'un message (données aléatoires générées)
var message = {
    message: faker.lorem.sentence(4),
    creator: null,
    recipient: null
};

// Description des test unitaires
describe('Message API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        async.parallel({
            creator: function (callback) {
                pixnista.findRandomUser(null, callback);
            },
            recipient: function (callback) {
                pixnista.findRandomUser(null, callback);
            }
        }, function (err, results) {
            message.creator = results.creator.id;
            message.recipient = results.recipient.id;
            done();
        });
    });
    it('should not be a able to list Messages', function (done) {
        request.get('/message').end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should be able to message a new Message', function (done) {
        request.post('/message').send(message).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 201);
            res.should.have.property('body').have.property('id');
            message.id = res.body.id;
            done();
        });
    });
    it('should be able to get the newly created Message', function (done) {
        request.get('/message/' + message.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to update a Message', function (done) {
        request.put('/message/' + message.id).send({
            message: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not able to delete a Message', function (done) {
        request.delete('/message/' + message.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should be able to get a Message someone tried to delete', function (done) {
        request.get('/message/' + message.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
});