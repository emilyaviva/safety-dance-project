'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, unique: true},
  comment: {type: String}
});

module.exports = mongoose.model('User', userSchema);
