'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Loc = require('../models/loc-model');
var Card = require('../models/card-model');
var router = express.Router;

module.exports = function(router) {
  router.use(bodyParser.json());
  router.use(require('../middlewares/verify'));

  // GET all cards
  router.get('/cards', function(req, res) {
    Card.find({}, function(err, cards) {
      if (err || !cards) res.json({msg: 'no cards'});
      else res.json(cards);
    });
  });

  // GET all unapproved cards
  router.get('/cards-unapproved', function(req, res) {
    Card.find({approved: false}, function(err, cards) {
      if (err || !cards) res.json({msg: 'no unapproved cards'});
      else res.json(cards);
    });
  });

  // PUT a card's approved to true, i.e. approve it
  router.put('/cards/:id', function(req, res) {
    Card.findOneAndUpdate({_id: req.params.id}, {approved: true}, function(err, card) {
      if (err || !card) res.status(404).json({msg: 'card not found'});
      else res.json({msg: 'card approved'});
    });
  });

  // DELETE a card the mod wishes to remove
  router.delete('/cards/:id', function(req, res) {
    Loc.findOneAndRemove({_id: req.params.id}, function(err, card) {
      if (err || !card) res.status(404).json({msg: 'card not found'});
      else res.json({msg: 'card deleted'});
    });
  });

};
