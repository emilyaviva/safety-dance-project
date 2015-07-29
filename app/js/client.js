'use strict'

require('angular/angular');
require('angular-route/angular-route');

var safetyApp = angular.module('safetyApp', ['ngRoute']);

//directives
require('./directives/footer-directive.js')(safetyApp);
require('./directives/nav-checkbox-directive.js')(safetyApp);
require('./directives/nav-trigger-directive.js')(safetyApp);
require('./directives/navigation-directive.js')(safetyApp);
require('./directives/locations-list-directive.js')(safetyApp);

//for testing - remove when routes are ready
require('./directives/location-card-directive.js')(safetyApp);
require('./directives/contact-directive.js')(safetyApp);
require('./directives/comment-card-directive.js')(safetyApp);

//routes
// safetyApp.config(['$routeProvider', function($routeProvider) {
// 	$routeProvider
// 	.when('/about', {
// 		templateUrl: '/templates/about-template.html'
// 	})
  // .when('/locationCard', {
	// 	templateUrl: '/templates/location-card-template.html',
	// 	controller: 'locationCardController'
	// })
  // .when('/login', {
  //   templateUrl: '/templates/login-template.html',
  //   controller: 'loginController'
  // })
  // .when('/contact', {
  //   templateUrl: '/templates/contact-template.html',
  //   controller: 'mainController'
  // })
// 	.otherwise({
// 		redirectTo: '/'
// 	});
// }]);
