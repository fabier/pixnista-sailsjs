var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var async = require('async');
var md5 = require('md5');
var fs = require('fs');
var pixnista = require('../../fixtures/pixnista.js');

// Création d'un post (données aléatoires générées)
var imageDataBinary = null;

var imageData = {
    id: null,
    path: './test/images/small.jpg',
    pathUpdate: './test/images/large.jpg',
    data: null,
    md5: null,
    creator: null
};

// Description des test unitaires
describe('ImageData API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        async.series({
            data: function (callback) {
                fs.readFile(imageData.path, callback);
            },
            user: function (callback) {
                pixnista.findRandomUser(null, callback);
            }
        }, function (err, results) {
            imageData.data = results.data;
            imageData.md5 = md5(results.data);
            imageData.creator = results.user.id;
            done();
        });
    });

    it('should not be a able to list ImageDatas', function (done) {
        request.get('/imageData').end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should be able to post a new ImageData', function (done) {
        request.post('/imageData')
//                .field('extra_info', '{"in":"case you want to send json along with your file"}')
                .attach('image', imageData.path)
                .end(function (err, res) {
                    imageData.id = res.body[0].id;
                    pixnista.handleResponseCheckStatusCode(err, res, 201, done);
                });
    });
    it('should be able to get the newly created ImageData', function (done) {
        request.get('/imageData/' + imageData.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200);
            var md5downloaded = md5(res.body);
            md5downloaded.should.equal(imageData.md5);
            done();
        });
    });
    it('should not be able to update a ImageData', function (done) {
        request.put('/imageData/' + imageData.id)
//                .field('extra_info', '{"in":"case you want to send json along with your file"}')
                .attach('image', imageData.pathUpdate)
                .end(function (err, res) {
                    pixnista.handleResponseCheckStatusCode(err, res, 405, done);
                });
    });
    it('should not be able to delete a ImageData', function (done) {
        request.delete('/imageData/' + imageData.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 405, done);
        });
    });
    it('should still be able to get the ImageData we just tried to delete', function (done) {
        request.get('/imageData/' + imageData.id).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
});