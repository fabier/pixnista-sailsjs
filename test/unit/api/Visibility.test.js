var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Test de l'API Visibility
// Il n'est pas possible de créer, mettre à jour ou supprimer un visibility
// Il est juste possible de les lister et de les récupérer par identifiant

var visibility = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences()
};

var randomVisibility, visibilities;

// Description des test unitaires
describe('Visibility API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should be able to list the existing Visibilities', function (done) {
        request.get('/visibility').end(function (err, res) {
            res.body.should.be.Array();
            res.body.length.should.be.above(1);
            visibilities = res.body;
            randomVisibility = visibilities[Math.floor(Math.random() * visibilities.length)];
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to get a Visibility by its ID', function (done) {
        request.get('/visibility/' + randomVisibility.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to create a new Visibility', function (done) {
        request.post('/visibility').send(visibility).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update an existing Visibility', function (done) {
        request.put('/visibility/' + randomVisibility.id).send({
            name: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a Visibility', function (done) {
        request.delete('/visibility/' + randomVisibility.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});