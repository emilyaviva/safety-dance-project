'use strict';

var Admin = require('../models/admin-model');
var jwt = require('jsonwebtoken');

module.exports = function(router) {
 router.post('/auth', function(req, res) {
   Admin.findOne({name: req.body.name}, function(err, user) {
     if (err) res.status(500).json({msg: 'Server error', error: err});
     if (!user) {
       res.json({success: false, msg: 'Authentication failed. User not found.'});
     } else if (!user.checkPassword(req.body.password)) {
       res.json({success: false, msg: 'Authentication failed. Password does not match.'});
     } else {
       var token = jwt.sign(user, process.env.secret, {expiresInMinutes: 1440});
       res.json({success: true, msg: 'Authentication successful.', token: token});
     }
   });
 });
};
