'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Loc = require('../models/loc-model');
var router = express.Router;

module.exports = function(router) {
  router.use(bodyParser.json());

//GET all locations
  router.get('/locs', function(req, res) {
    Loc.find({}, function(err, data) {
      if (err) {
        res.json({'error:': err});
      } else {
        res.json(data);
      }
    });
  });

//GET one location by name
  router.get('/loc/:name', function(req, res) {
    var name = req.params.name;
    Loc.findOne({name:name}, function(err, data) {
      if (err) {
        res.json({'error:': err});
      } else {
        res.json(data);
      }
    });
  });

//POST new location
  router.post('/loc', function(req, res) {
    new Loc({
      name: req.body.name,
      locationName: req.body.locationName,
      genderNeutral: req.body.genderNeutral,
      openToPublic: req.body.openToPublic,
      singleStall: req.body.singleStall,
      lockingDoors: req.body.lockingDoors,
      fullDoors: req.body.fullDoors,
      wheelchairStall: req.body.wheelchairStall,
      changingTables: req.body.changingTables
    }).save(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json({"msg": "added new location"});
      }
    });
  });



};
