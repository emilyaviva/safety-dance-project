'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Loc = require('../models/loc-model');
var Card = require('../models/card-model');
var router = express.Router;

module.exports = function(router) {
  router.use(bodyParser.json());

  // GET all locations (without nested cards!)
  router.get('/locs', function(req, res) {
    Loc.find({}, function(err, found) {
      if (err || !found) res.status(500).json({error: err});
      else res.json(found);
    });
  });

  // GET one location by ID
  router.get('/locs/:id', function(req, res) {
    Loc.findById(req.params.id, function(err, found) {
      if (err || !found) res.status(500).json({error: err});
      else res.json(found);
    });
  });

  // GET location's populated cards
  router.get('/locs/:id/cards', function(req, res) {
    Loc.findById(req.params.id, function(err, loc) {
       if (err || !loc) res.status(500).json({error: err});
       else {
         Card.find({loc: loc._id}, function(err, cards) {
           res.json(cards);
         });
       }
     });
  });

  // POST new blank location
  router.post('/locs', function(req, res) {
    var newLoc = new Loc({
      locationName: req.body.locationName,
      geocoordinates: req.body.geocoordinates,
      createdAt: Date()
    });
    newLoc.save(function(err, data) {
      if (err || !data) res.status(500).json({error: err});
      else res.json({msg: 'location created', id: data._id});
    });
  });

  // POST new comment Card
  router.post('/locs/:id/cards', function(req, res) {
    Loc.findById(req.params.id, function(err, doc) {
      var newCard = new Card({
        loc: doc._id,
        notes: req.body.notes,
        createdAt: Date()
      });
      newCard.save(function(err, data) {
        if (err || !data) res.status(500).json({error: err});
        else res.json({msg: 'card posted', id: data._id});
      });
    });
  });

};
