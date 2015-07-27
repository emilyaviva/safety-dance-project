'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bathroomSchema = new Schema({
  name: {type: String, unique: true},
  genderNeutrality: {type: Boolean},
  singleStall: {type: Boolean},
  lockingDoors: {type: Boolean},
  fullDoors: {type: Boolean},
  changingTables: {type: Boolean}
});

module.exports = mongoose.model('Bathroom', bathroomSchema);
