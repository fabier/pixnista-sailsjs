var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Test de l'API Language
// Il n'est pas possible de créer, mettre à jour ou supprimer un language
// Il est juste possible de les lister et de les récupérer par identifiant

var language = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences()
};

var randomLanguage, languages;

// Description des test unitaires
describe('Language API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should be able to list the existing Languages', function (done) {
        request.get('/language').end(function (err, res) {
            res.body.should.be.Array();
            res.body.length.should.be.above(1);
            languages = res.body;
            randomLanguage = languages[Math.floor(Math.random() * languages.length)];
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to get a Language by its ID', function (done) {
        request.get('/language/' + randomLanguage.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to create a new Language', function (done) {
        request.post('/language').send(language).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update an existing Language', function (done) {
        request.put('/language/' + randomLanguage.id).send({
            name: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a Language', function (done) {
        request.delete('/language/' + randomLanguage.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});