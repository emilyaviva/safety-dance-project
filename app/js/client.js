'use strict'

require('angular/angular');

var safetyApp = angular.module('safetyApp', []);

//directives
require('./directives/footer-directive.js')(safetyApp);
require('./directives/nav-checkbox-directive.js')(safetyApp);
require('./directives/nav-trigger-directive.js')(safetyApp);
require('./directives/navigation-directive.js')(safetyApp);
require('./directives/locations-list-directive.js')(safetyApp);
