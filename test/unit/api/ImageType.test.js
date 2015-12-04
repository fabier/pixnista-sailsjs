var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Test de l'API ImageType
// Il n'est pas possible de créer, mettre à jour ou supprimer un imageType
// Il est juste possible de les lister et de les récupérer par identifiant

var imageType = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences()
};

var randomImageType, imageTypes;

// Description des test unitaires
describe('ImageType API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should be able to list the existing ImageTypes', function (done) {
        request.get('/imageType').end(function (err, res) {
            res.body.should.be.Array();
            res.body.length.should.be.above(1);
            imageTypes = res.body;
            randomImageType = imageTypes[Math.floor(Math.random() * imageTypes.length)];
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to get a ImageType by its ID', function (done) {
        request.get('/imageType/' + randomImageType.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to create a new ImageType', function (done) {
        request.post('/imageType').send(imageType).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update an existing ImageType', function (done) {
        request.put('/imageType/' + randomImageType.id).send({
            name: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a ImageType', function (done) {
        request.delete('/imageType/' + randomImageType.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});