var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Test de l'API Country
// Il n'est pas possible de créer, mettre à jour ou supprimer un country
// Il est juste possible de les lister et de les récupérer par identifiant

var country = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences()
};

var randomCountry, countries;

// Description des test unitaires
describe('Country API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should be able to list the existing Countries', function (done) {
        request.get('/country').end(function (err, res) {
            res.body.should.be.Array();
            res.body.length.should.be.above(1);
            countries = res.body;
            randomCountry = countries[Math.floor(Math.random() * countries.length)];
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to get a Country by its ID', function (done) {
        request.get('/country/' + randomCountry.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to create a new Country', function (done) {
        request.post('/country').send(country).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update an existing Country', function (done) {
        request.put('/country/' + randomCountry.id).send({
            name: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a Country', function (done) {
        request.delete('/country/' + randomCountry.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});