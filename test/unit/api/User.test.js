var should = require('should');
var assert = require('assert');
var request = require('supertest');
var faker = require('faker');
var randomId = require('random-id');
var winston = require('winston');
var pixnista = require('../../fixtures/pixnista.js');

// Base URL pour les tests
var url = 'http://localhost:8080';

// Création de compte utilisateur généré
var user = {
    name: faker.name.findName(),
    password: randomId(18),
    newpassword: randomId(18),
    email: faker.internet.email()
};

// Affichage dans la console des données générées
// console.log(user);

// Description des test unitaires
describe('User', function () {
    describe('User', function () {
        it('should correctly create a new account', function (done) {
            request(url).post('/user').send(user).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 200);
                res.should.have.property('body').have.property('id');
                user.id = res.body.id;
                done();
            });
        });
        it('should be able to login using the new created account', function (done) {
            request(url).put('/login').send(user).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 200, done);
            });
        });
        it('should reject if password is wrong', function (done) {
            request(url).put('/login').send({
                email: user.email,
                password: randomId(18) // wrong password
            }).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 404, done);
            });
        });
        it('should reject if login is wrong', function (done) {
            request(url).put('/login').send({
                email: faker.internet.email(), // wrong login
                password: user.password // existing password
            }).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 404, done);
            });
        });
        it('should correctly update an existing account', function (done) {
            request(url).put('/user/' + user.id).send({
                password: user.newpassword // new password
            }).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 200, done);
            });
        });
        it('should be able to connect using new password', function (done) {
            request(url).put('/login').send({
                email: user.email,
                password: user.newpassword
            }).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 200, done);
            });
        });
        it('should not be able to connect using old password', function (done) {
            request(url).put('/login').send({
                email: user.email,
                password: user.password // old password
            }).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 404, done);
            });
        });
        it('should delete an account', function (done) {
            request(url).delete('/user/' + user.id).send().end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 200, done);
            });
        });
        it('should not be able to login with correct credential if account is deleted', function (done) {
            request(url).put('/login').send({
                email: user.email,
                password: user.newpassword
            }).end(function (err, res) {
                pixnista.handleResponseCheckStatusCode(err, res, 404, done);
            });
        });
    });
});