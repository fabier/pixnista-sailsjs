var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var async = require('async');
var pixnista = require('../../fixtures/pixnista.js');

// Création de plusieurs votes
var postVotePositive = {
    vote: true,
    comment: faker.lorem.sentences()
};
var postVoteNegative = {
    vote: false,
    comment: faker.lorem.sentences()
};

// Description des test unitaires
describe('PostVote API', function () {
    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        async.series([
            function (callback) {
                pixnista.findUser(null, function (err, u) {
                    postVotePositive.creator = u.id;
                    postVoteNegative.creator = u.id;
                    callback(err, u);
                });
            },
            function (callback) {
                pixnista.findPost(null, function (err, p) {
                    postVotePositive.post = p.id;
                    postVoteNegative.post = p.id;
                    callback(err, p);
                });
            },
            function (callback) {
                pixnista.findVoteReason(null, function (err, vr) {
                    // Raison non renseignée pour un vote positif
                    postVotePositive.voteReason = null;
                    postVoteNegative.voteReason = vr.id;
                    callback(err, vr);
                });
            }
        ], function (err, results) {
            done();
        });
    });

    it('should be able to post a new PostVote', function (done) {
        request.post('/postVote').send(postVotePositive).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 201);
            res.should.have.property('body').have.property('id');
            postVotePositive.id = res.body.id;
            done();
        });
    });
    it('should be able to get the newly created PostVote', function (done) {
        request.get('/postVote/' + postVotePositive.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to post a PostVote on the same post', function (done) {
        request.post('/postVote').send(postVoteNegative).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to update a PostVote', function (done) {
        request.put('/postVote/' + postVotePositive.id).send({vote: false}).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a PostVote', function (done) {
        request.delete('/postVote/' + postVotePositive.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});