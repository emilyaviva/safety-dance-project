'use strict';

var superagent = require('superagent');

var initial = {name: 'initial', password: 'initial'};

superagent.post('/admins')
          .send(initial)
          .end(function(err, res) {
            if (err) {
              console.log('bootstrap error in creation: ' + err);
              return res.send('failed to bootstrap: creating an admin');
            }
            superagent.post('/auth/auth')
                      .send(initial)
                      .end(function(err, res) {
                        if (err) {
                          console.log('boostrap error in authentication: ' + err);
                          return res.send('failed to bootstrap: initial login');
                        }
                        else res.send('initial admin bootstrapped');
                      });
          });
