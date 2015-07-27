/* jshint expr: true */
'use strict';

var mongoose = require('mongoose');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

process.env.MONGO_SAFETYAPP_URI = 'mongodb://localhost/mongo_safetyapp_test';
process.env.PORT = 3003;

chai.use(chaiHttp);

  after(function(done) {
    mongoose.connection.db.dropDatabase(function() { done(); });
  });

});
