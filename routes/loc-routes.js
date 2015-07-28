'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Loc = require('../models/loc-model');
var router = express.Router;

module.exports = function(router) {
  router.use(bodyParser.json());

//GET all locations
  router.get('/api/locs', function(req, res) {
    Loc.find({}, function(err, data) {
      if (err || !data) {
        res.json({'error:': err});
      } else {
        res.json(data);
      }
    });
  });

// GET one location by ID
    router.get('/api/loc/:id', function(req, res) {
      var id = req.params.id;
      Loc.findOne({_id:id}, function(err, data) {
        if (err || !data) {
           res.json({'error ': err});
        } else {
           res.json(data);
        }
      });
    });

//POST new comment card
router.post('/api/loc', function(req, res) {
    var newLoc = new Loc({
      approved: false,
      locationName: req.body.locationName,
      genderNeutral: req.body.genderNeutral,
      openToPublic: req.body.openToPublic,
      singleStall: req.body.singleStall,
      lockingDoors: req.body.lockingDoors,
      fullDoors: req.body.fullDoors,
      wheelchairStall: req.body.wheelchairStall,
      changingTables: req.body.changingTables
    });
    newLoc.save(function (err, data) {
      if (err || !data) {
        console.log('POST error ' + err + '.');
        return res.status(500).json({'msg': 'error!'});
      } else {
        res.json({'msg': 'added new location', success: true});
      }
    });
  });


};
