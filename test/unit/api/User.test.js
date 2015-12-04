var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Création de compte utilisateur (données aléatoires générées)
var user = {
    name: faker.name.findName(),
    password: randomId(18),
    newpassword: randomId(18), // Le mot de passe qu'on va changer
    email: faker.internet.email()
};

// Description des test unitaires
describe('User API', function () {

    // A executer avant de commencer les tests
    before(function (done) {
        request = request(pixnista.baseURL());
        done();
    });

    it('should not be a able to list users', function (done) {
        request.get('/user').end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 403, done);
        });
    });
    it('should correctly create a new account', function (done) {
        request.post('/user').send(user).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 201);
            res.should.have.property('body').have.property('id');
            user.id = res.body.id;
            done();
        });
    });
    it('should reject if password is wrong', function (done) {
        request.put('/login').send({
            email: user.email,
            password: randomId(18) // wrong password
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 404, done);
        });
    });
    it('should reject if login is wrong', function (done) {
        request.put('/login').send({
            email: faker.internet.email(), // wrong login
            password: user.password // existing password
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 404, done);
        });
    });
    it('should be able to login using the new created account', function (done) {
        request.put('/login').send(user).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should correctly update an existing account', function (done) {
        request.put('/user/' + user.id).send({
            password: user.newpassword // new password
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should be able to connect using new password provided', function (done) {
        request.put('/login').send({
            email: user.email,
            password: user.newpassword
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to connect using old password', function (done) {
        request.put('/login').send({
            email: user.email,
            password: user.password // old password
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 404, done);
        });
    });
    it('should be able to delete an account', function (done) {
        request.delete('/user/' + user.id).send().end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 200, done);
        });
    });
    it('should not be able to login with correct credentials if account is deleted', function (done) {
        request.put('/login').send({
            email: user.email,
            password: user.newpassword
        }).end(function (err, res) {
            pixnista.handleResponseCheckStatusCode(err, res, 404, done);
        });
    });
});