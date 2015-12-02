var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var fs = require('fs');
var pixnista = require('../../fixtures/pixnista.js');

// Création d'un post (données aléatoires générées)
var imageDataBinary = null;

var imageData = {
    data: null,
    creator: null
};

var user, post;

// Description des test unitaires
describe('ImageData API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        fs.readFile('./test/images/small.jpg', function (err, data) {
            if (err) {
                throw err;
            }
            imageData.data = data;
            pixnista.findUser(null, function (err, u) {
                user = u;
                imageData.creator = user.id;
                done();
            });
        });
    });

    it('should be able to post a new ImageData', function (done) {
        request(baseURL()).post('/imageData')
                .field('extra_info', '{"in":"case you want to send json along with your file"}')
                .attach('image', './test/images/small.jpg')
                .end(function (err, res) {
                    pixnista.handleResponseCheckStatusCode(err, res, 201, done);
                });
    });
    it('should be able to get the newly created ImageData', function (done) {
//        request(baseURL()).get('/imageData/' + imageData.id).end(function (err, res) {
//            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
//        });
        done();
    });
    it('should be able to delete a Image', function (done) {
//        request(baseURL()).delete('/imageData/' + imageData.id).end(function (err, res) {
//            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
//        });
        done();
    });
    it('should not be able to get a deleted Image', function (done) {
//        request(baseURL()).get('/imageData/' + imageData.id).end(function (err, res) {
//            pixnista.handleResponseCheckStatusCode(err, res, 404, done);
//        });
        done();
    });
});

function baseURL() {
    return pixnista.baseURL();
}