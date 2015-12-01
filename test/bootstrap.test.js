var Sails = require('sails'), sails;

before(function (done) {
    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(5000);

    Sails.lift({
        // configuration for testing purposes
    }, function (err, server) {
        sails = server;
        if (err) {
            done(err);
        } else {
            // here you can load fixtures, etc.
//            var pixnista = require('./fixtures/pixnista.js');
            done(err, sails);
        }
    });
});

after(function (done) {
    // here you can clear fixtures, etc.
    Sails.lower(done);
});