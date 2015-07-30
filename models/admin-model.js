'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var adminSchema = new Schema({
  name: {type: String, unique: true},
  password: {type: String}
});

adminSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

adminSchema.methods.checkPassword = function(password) {
  return  bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Admin', adminSchema);
