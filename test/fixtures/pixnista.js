module.exports = {
    // Function utilitaire pour gérer les réponses du serveur
    handleResponseCheckStatusCode: function (err, res, statusCode, done) {
        if (err) {
            throw err;
        } else {
            res.should.have.property('status').equal(statusCode);
            if (done !== undefined) {
                done();
            }
        }
    }
};