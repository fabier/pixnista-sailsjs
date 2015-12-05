var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Test de l'API VoteReason
// Il n'est pas possible de créer, mettre à jour ou supprimer un voteReason
// Il est juste possible de les lister et de les récupérer par identifiant

var voteReason = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences()
};

var randomVoteReason, voteReasons;

// Description des test unitaires
describe('VoteReason API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should be able to list the existing VoteReasons', function (done) {
        request.get('/voteReason').end(function (err, res) {
            res.body.should.be.Array();
            res.body.length.should.be.above(1);
            voteReasons = res.body;
            randomVoteReason = voteReasons[Math.floor(Math.random() * voteReasons.length)];
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to get a VoteReason by its ID', function (done) {
        request.get('/voteReason/' + randomVoteReason.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to create a new VoteReason', function (done) {
        request.post('/voteReason').send(voteReason).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update an existing VoteReason', function (done) {
        request.put('/voteReason/' + randomVoteReason.id).send({
            name: faker.lorem.sentence()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a VoteReason', function (done) {
        request.delete('/voteReason/' + randomVoteReason.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});