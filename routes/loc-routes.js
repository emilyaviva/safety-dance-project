'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Loc = require('../models/loc-model');
var router = express.Router;

module.exports = function(router) {
  router.use(bodyParser.json());

//GET all locations
  router.get('/locs', function (req, res) {
    Loc.find({}, function(err, data) {
      if (err || !data) {
        res.json({'error:': err});
      } else {
        res.json(data);
      }
    });
  });

//GET one location by id
  router.get('/loc/:id', function (req, res) {
    var id = req.params.id;
    Loc.findById(id, function(err, data) {
      if (err || !data) {
          res.json({'error ': err});
      } else {
          res.json(data);
      }
    });
  });

//GET one location by name
  router.get('/loc/:name', function (req, res) {
    var name = req.params.name;
    Loc.finebyOne(name, function (err, data) {
      if (err || !data) {
        res.json({'error ': err});
      } else {
        res.json(data);
      }
    });
  });

//POST new location
router.post('/loc', function (req, res) {
  var newLoc = new Loc({
    name: req.body.name,
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
      res.json({'error ': err});
    } else {
      res.send({"msg": "added new location", success: true});
    }
  });
});

//PUT to update new location
router.put('/loc/:id', function (req, res) {
  Loc.findByIdAndUpdate(req.params.id,{
    $set: req.body}, function (err, data) {
    if (err || !data) {
      console.log('PUT error ' + err + '.');
    } else {
    return res.json(data);
    }
  });
});

//DELETE a location
router.delete('/loc/:id', function(req, res) {
    Loc.findOneAndRemove({_id:req.params.id}, function(err, data) {
      if (err || !data) {
        console.log('DELETE error ' + err + '.');
        return res.status(500).json({'msg': 'error!'});
      } else {
        console.log('Location deleted!');
        res.json(data);
      }
      });
    });
};
