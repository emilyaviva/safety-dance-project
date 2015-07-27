/* jshint expr: true */
'use strict';

var mongoose = require('mongoose');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

process.env.MONGO_SAFETYAPP_URI = 'mongodb://localhost/mongo_safetyapp_test';
process.env.PORT = process.env.PORT_TEST || 3003;

chai.use(chaiHttp);

describe(server.js, function() {
  this.timeout(5000);

  // tests go here

  after(function(done) {
    mongoose.connection.db.dropDatabase(function() { done(); });
  });

});
