'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locSchema = new Schema({
  locationName: {type: String},
  geocoordinates: {type: String},
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card'}],
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

module.exports = mongoose.model('Loc', locSchema);
