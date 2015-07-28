'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locSchema = new Schema({
  name: {type: String},
  locationName: {type: String},
  genderNeutral: {type: Boolean},
  openToPublic: {type: Boolean},
  singleStall: {type: Boolean},
  lockingDoors: {type: Boolean},
  fullDoors: {type: Boolean},
  wheelchairStall : {type: Boolean},
  changingTables: {type: Boolean},
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

module.exports = mongoose.model('Loc', locSchema);
