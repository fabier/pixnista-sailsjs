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
        async.series({
            user: function (callback) {
                pixnista.findRandomUser(null, callback);
            },
            post: function (callback) {
                pixnista.findRandomPost(null, callback);
            },
            voteReason: function (callback) {
                pixnista.findRandomVoteReason(null, callback);
            }
        }, function (err, results) {
            postVotePositive.creator = results.user.id;
            postVoteNegative.creator = results.user.id;
            postVotePositive.post = results.post.id;
            postVoteNegative.post = results.post.id;
            // Raison non renseignée pour un vote positif
            postVotePositive.voteReason = null;
            postVoteNegative.voteReason = results.voteReason.id;
            done();
        });
    });

    it('should not be a able to list PostVotes', function (done) {
        request.get('/postVote').end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
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