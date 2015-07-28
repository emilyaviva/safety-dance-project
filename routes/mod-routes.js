'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Loc = require('../models/loc-model');
var router = express.Router;

module.exports = function(router) {
  router.use(bodyParser.json());

//GET all outstanding locations
  router.get('/locs', function(req, res) {
    Loc.find({approved: false}, function(err, data) {
      if (err || !data) {
        res.json({'msg': 'no unapproved cards'});
      } else {
        res.json(data);
      }
    });
  });

//PUT a route's approved to true, i.e. approve it
  router.put('/locs/:id', function(req, res) {
    var id = req.params.id;
    Loc.findOneAndUpdate({_id:id}, {approved: true}, function(err, loc) {
      if (err || !loc) {
        res.status(404).json({'not found'});
      } else {
        res.json({success: true, msg: 'comment approved'});
      }
    });
  });

//DELETE a route the mod wishes to remove
  router.delete('/locs/:id', function(req, res) {
    var id = req.params:id;
    Loc.findOneAndDelete({_id:id}, function(err, loc) {
      if (err || !loc) {
        res.status(404).json({success: false, msg: 'comment not found'});
      } else {
        res.json({success: true, msg: 'comment deleted'});
      }
    });
  });

}
