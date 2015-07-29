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
  var noteId = null;

  this.timeout(5000);

  it('should create and POST a new location', function(done) {
    chai.request('localhost:3003')
        .post('/api/loc')
        .send({"name": "testName", "locationName": "testLocationName"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.success).to.be.true;
          done();
    });
  });

  it('should respond to a GET request for all locations', function (done) {
    chai.request('localhost:3003')
        .get('/api/locs')
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(typeof res.body).to.eql('object');
          done();
    });
  });

   describe('new location for testing', function() {
    beforeEach(function(done) {
      var testLoc = new Loc({name: 'test note'});
      testLoc.save(function(err, data) {
        if(err) throw err;
        this.testLoc = data;
        done();
      }.bind(this));
    });

   it('should PUT/update a location', function(done) {
      var id = this.testLoc._id;
      chai.request('localhost:3003')
          .put('/loc/' + id)
          .send({name: 'new name for test loc'})
          .end(function(err, res) {
        expect(err).to.eql(null);
        done();
      });
    });

    it('should DELETE the test location', function(done) {
      chai.request('localhost:3003')
          .del('/api/loc/' + this.testLoc._id)
          .end(function (err, res) {
            expect(err).to.eql(null);
            expect(res.body.success).to.eql.true;
            done();
          });
    });

  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
   });
});
});
