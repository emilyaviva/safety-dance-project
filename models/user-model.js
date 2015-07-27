'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, unique: true},
  password: {type: String},
  cards: {type: Array}
});

module.exports = mongoose.model('User', userSchema);
