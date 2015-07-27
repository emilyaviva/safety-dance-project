'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  name: {type: String},
  locationName: {type: String, unique: true},
  genderNeutrality: {type: Boolean},
  openPublic: {type: Boolean},
  singleStall: {type: Boolean},
  lockingDoors: {type: Boolean},
  fullDoors: {type: Boolean},
  wheelchairStall : {type: Boolean},
  changingTables: {type: Boolean}, //in both M/W
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

module.exports = mongoose.model('Location', locationSchema);
