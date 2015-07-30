'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Loc = require('../models/loc-model');
var Card = require('../models/card-model');
var Admin = require('../models/admin-model');
//var bcrypt = require('bcrypt');
var router = express.Router;

module.exports = function(router) {
  router.use(bodyParser.json());
  //router.use(require('../middlewares/verify'));

// CARD MANAGEMENT

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

// ADMIN USER MANAGEMENT

  // GET all admins
  router.get('/admins', function(req, res) {
    Admin.find({}, function(err, admins) {
      if (err) res.status(500).json({msg: 'Server error'});
      else if (!admins) res.send([]);
      else res.json(admins);
    });
  });

  // POST create a new admin
  router.post('/admins', function(req, res) {
    var admin = new Admin(req.body);
    admin.password = admin.generateHash(admin.password);
    admin.save(function(err, data) {
      if (err) res.status(500).json({msg: 'Server error'});
      else res.json(data);
    });
  });

  // DELETE an admin
  router.delete('/admins', function(req, res) {
    Admin.findOneAndRemove({name: req.body.name}, function(err, admin) {
      if (err) res.status(500).json({msg: 'Server error'});
      else if (!admin) res.status(404).json({msg: 'User not found'});
      else res.json({success: true, msg: 'User deleted'})
    });
  });

};
