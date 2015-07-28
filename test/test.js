/* jshint expr: true */
'use strict';

var mongoose = require('mongoose');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

var Loc = require('../models/loc-model');

process.env.MONGO_SAFETYAPP_URI = 'mongodb://localhost/MONGO_SAFETYAPP_URI';

process.env.PORT = 3003;

chai.use(chaiHttp);

require('../server');

describe('app', function() {
  this.timeout(5000);

  it('should create and POST a new location', function(done) {
    chai.request('localhost:3003')
        .post('/loc')
        .send({"name": "testName", "locationName": "testLocationName"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.success).to.be.true;
          done();
    });
  });

  it('respond to a GET requests', function (done) {
    chai.request('localhost:3003')
        .get('/locs')
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(typeof res.body).to.eql('object');
          done();
    });
  });

  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

});
