'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var mongoURI = 'mongodb://localhost/safetydance';
//var mongoURI = process.env.MONGO_SAFETYAPP_URI || 'mongodb://localhost/safetydance';

var locRoutes = express.Router();
require('./routes/loc-routes')(locRoutes);
app.use('/api', locRoutes);

var modRoutes = express.Router();
require('./routes/mod-routes')(modRoutes);
app.use('/mod', modRoutes);

//var cardRoutes = express.Router();
//require('./routes/card-routes')(cardRoutes);
//app.use('/api', cardRoutes);

mongoose.connect(mongoURI, function(err) {
  if (err) console.log('error: ' + err);
  else console.log('MongoDB connection successful');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
