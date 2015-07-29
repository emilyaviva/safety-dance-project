'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  approved: {type: Boolean, default: false},
  loc: {type: String, ref: 'Loc'},
  //locationName: {type: String},
  notes: {type: String},
  createdAt: {type: Date}
});

module.exports = mongoose.model('Card', cardSchema);
