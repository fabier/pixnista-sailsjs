var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Test de l'API BodyType
// Il n'est pas possible de créer, mettre à jour ou supprimer un bodyType
// Il est juste possible de les lister et de les récupérer par identifiant

var bodyType = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences()
};

var randomBodyType, bodyTypes;

// Description des test unitaires
describe('BodyType API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should be able to list the existing BodyTypes', function (done) {
        request.get('/bodyType').end(function (err, res) {
            res.body.should.be.Array();
            res.body.length.should.be.above(1);
            bodyTypes = res.body;
            randomBodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to get a BodyType by its ID', function (done) {
        request.get('/bodyType/' + randomBodyType.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to create a new BodyType', function (done) {
        request.post('/bodyType').send(bodyType).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update an existing BodyType', function (done) {
        request.put('/bodyType/' + randomBodyType.id).send({
            name: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a BodyType', function (done) {
        request.delete('/bodyType/' + randomBodyType.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});