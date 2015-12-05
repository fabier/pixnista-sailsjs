var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Test de l'API State
// Il n'est pas possible de créer, mettre à jour ou supprimer un state
// Il est juste possible de les lister et de les récupérer par identifiant

var state = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences()
};

var randomState, states;

// Description des test unitaires
describe('State API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should be able to list the existing States', function (done) {
        request.get('/state').end(function (err, res) {
            res.body.should.be.Array();
            res.body.length.should.be.above(1);
            states = res.body;
            randomState = states[Math.floor(Math.random() * states.length)];
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to get a State by its ID', function (done) {
        request.get('/state/' + randomState.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to create a new State', function (done) {
        request.post('/state').send(state).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update an existing State', function (done) {
        request.put('/state/' + randomState.id).send({
            name: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a State', function (done) {
        request.delete('/state/' + randomState.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});