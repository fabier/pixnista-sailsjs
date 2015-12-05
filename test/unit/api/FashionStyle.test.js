var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Test de l'API FashionStyle
// Il n'est pas possible de créer, mettre à jour ou supprimer un fashionStyle
// Il est juste possible de les lister et de les récupérer par identifiant

var fashionStyle = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences()
};

var randomFashionStyle, fashionStyles;

// Description des test unitaires
describe('FashionStyle API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should be able to list the existing FashionStyles', function (done) {
        request.get('/fashionStyle').end(function (err, res) {
            res.body.should.be.Array();
            res.body.length.should.be.above(1);
            fashionStyles = res.body;
            randomFashionStyle = fashionStyles[Math.floor(Math.random() * fashionStyles.length)];
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to get a FashionStyle by its ID', function (done) {
        request.get('/fashionStyle/' + randomFashionStyle.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to create a new FashionStyle', function (done) {
        request.post('/fashionStyle').send(fashionStyle).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update an existing FashionStyle', function (done) {
        request.put('/fashionStyle/' + randomFashionStyle.id).send({
            name: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a FashionStyle', function (done) {
        request.delete('/fashionStyle/' + randomFashionStyle.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});