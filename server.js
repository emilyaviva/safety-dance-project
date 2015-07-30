'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

var mongoURI = process.env.MONGO_SAFETYAPP_URI || 'mongodb://localhost/safetydance';

var authRoutes = express.Router();
require('./routes/auth-routes')(authRoutes);
app.use('/auth', authRoutes);

var locRoutes = express.Router();
require('./routes/loc-routes')(locRoutes);
app.use('/api', locRoutes);

var modRoutes = express.Router();
require('./routes/mod-routes')(modRoutes);
app.use('/mod', modRoutes);

mongoose.connect(mongoURI, function(err) {
  if (err) console.log('error: ' + err);
  else console.log('MongoDB connection successful');
});

process.env.secret = process.env.secret || 'CHANGE MEEEEEE'

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
