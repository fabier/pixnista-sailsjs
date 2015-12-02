var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Création d'un post (données aléatoires générées)
var post = {
    title: faker.lorem.sentence(4),
    content: faker.lorem.sentences()
};

var user, image;

// Description des test unitaires
describe('Post', function () {
    it('init', function (done) {
        pixnista.findUser(null, function (err, u) {
            user = u;
            post.creator = user.id;
            pixnista.findImage(null, function (err, i) {
                image = i;
                done();
            });
        });
    });
    it('should be able to post a new Post', function (done) {
        request(baseURL()).post('/post').send(post).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 201);
            res.should.have.property('body').have.property('id');
            post.id = res.body.id;
            done();
        });
    });
    it('should be able to get the newly created Post', function (done) {
        request(baseURL()).get('/post/' + post.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to delete a Post', function (done) {
        request(baseURL()).delete('/post/' + post.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to get a deleted Post', function (done) {
        request(baseURL()).get('/post/' + post.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 404, done);
        });
    });
});

function baseURL() {
    return pixnista.baseURL();
}