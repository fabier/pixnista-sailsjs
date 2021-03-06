var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var async = require('async');
var pixnista = require('../../fixtures/pixnista.js');

// Création de plusieurs commentaires
var singlePostComment;
var postComments = [];
var numberOfCommentsToGenerate = 5;

// Description des test unitaires
describe('PostComment API', function () {
    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        async.parallel({
            user: function (callback) {
                pixnista.findRandomUser(null, callback);
            },
            post: function (callback) {
                pixnista.findRandomPost(null, callback);
            }
        }, function (err, results) {
            singlePostComment = {
                comment: faker.lorem.sentences(),
                creator: results.user.id,
                post: results.post.id
            };
            for (var i = 0; i < numberOfCommentsToGenerate; i++) {
                postComments.push({
                    comment: faker.lorem.sentences(),
                    creator: results.user.id,
                    post: results.post.id
                });
            }
            done();
        });
    });

    it('should not be a able to list PostComments', function (done) {
        request.get('/postComment').end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should be able to post a new PostComment', function (done) {
        request.post('/postComment').send(singlePostComment).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 201);
            res.should.have.property('body').have.property('id');
            singlePostComment.id = res.body.id;
            done();
        });
    });
    it('should be able to get the newly created PostComment', function (done) {
        request.get('/postComment/' + singlePostComment.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to update a PostComment', function (done) {
        request.put('/postComment/' + singlePostComment.id).send({
            comment: faker.lorem.sentences()
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should not be able to delete a PostComment', function (done) {
        request.delete('/postComment/' + singlePostComment.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should be able to get a PostComment someone tried to delete', function (done) {
        request.get('/postComment/' + singlePostComment.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to post multiple PostComments on the same post', function (done) {
        async.each(postComments, function (postComment, callback) {
            request.post('/postComment').send(postComment).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 201, callback);
            });
        }, function (err) {
            if (err) {
                throw err;
            } else {
                done();
            }
        });
    });
});