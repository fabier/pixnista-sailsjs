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
            loadFixtures(function () {
                done(err, sails);
            });
        }
    });
});

after(function (done) {
    // here you can clear fixtures, etc.
    clearFixtures(function () {
        Sails.lower(done);
    });
});

function loadFixtures(done) {
    // Create test User

    done();
}

function clearFixtures(done) {
    // Delete test user
    done();
}