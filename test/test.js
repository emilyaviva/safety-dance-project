/* jshint expr: true */
'use strict';

var mongoose = require('mongoose');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

var Loc = require('../models/loc-model');

process.env.MONGO_FILESAPP_URI = 'mongodb://localhost/mongo_filesapp_test';
process.env.PORT = 3003;

chai.use(chaiHttp);

require('../server');

describe('app', function() {
  this.timeout(5000);

  it('should create and POST a new location', function(done) {
    chai.request('localhost:3003')
        .post('/loc')
        .send({"name": "test", "locationName": "locationName test"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('Successfully created new location.');
          done();
    });
  });

  after(function(done) {
    mongoose.connection.db.dropDatabase(function() { done(); });
  });

});
