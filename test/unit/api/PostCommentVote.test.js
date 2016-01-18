var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var async = require('async');
var pixnista = require('../../fixtures/pixnista.js');

// Création d'un vote pour un commentaire
var postCommentVote = {
    vote: true,
    postComment: null,
    creator: null
};

// Description des test unitaires
describe('PostCommentVote API', function () {
    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        async.parallel({
            user: function (callback) {
                pixnista.findRandomUser(null, callback);
            },
            postComment: function (callback) {
                pixnista.findRandomPostComment(null, callback);
            }
        }, function (err, results) {
            postCommentVote.postComment = results.postComment.id;
            postCommentVote.creator = results.user.id;
            done();
        });
    });

    it('should not be a able to list PostCommentVotes', function (done) {
        request.get('/postCommentVote').end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should be able to post a new PostCommentVote', function (done) {
        request.post('/postCommentVote').send(postCommentVote).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 201);
            res.should.have.property('body').have.property('id');
            postCommentVote.id = res.body.id;
            done();
        });
    });
    it('should be able to get the newly created PostCommentVote', function (done) {
        request.get('/postCommentVote/' + postCommentVote.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to update a PostCommentVote', function (done) {
        request.put('/postCommentVote/' + postCommentVote.id).send({
            vote: false
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a PostCommentVote', function (done) {
        request.delete('/postCommentVote/' + postCommentVote.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
});