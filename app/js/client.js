'use strict'

require('angular/angular');
require('angular-route/angular-route');

var safetyApp = angular.module('safetyApp', ['ngRoute']);

//services
require('./services/resourceService.js')(safetyApp);

//directives
require('./directives/footer-directive.js')(safetyApp);
require('./directives/nav-checkbox-directive.js')(safetyApp);
require('./directives/nav-trigger-directive.js')(safetyApp);
require('./directives/navigation-directive.js')(safetyApp);

//controllers
require('./controllers/locationsController.js')(safetyApp);
require('./controllers/cardsController.js')(safetyApp);
require('./controllers/usersController.js')(safetyApp);

//routes
safetyApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
  .when('/', {
		templateUrl: './templates/locations-list-template.html',
		controller: 'locationsController'
	})
	.when('/about', {
		templateUrl: './templates/about-template.html'
	})
  .when('/contact', {
    templateUrl: './templates/contact-template.html'
  })
  .when('/login', {
    templateUrl: './templates/login-template.html'
  })
	.when('/newcomment/:id', {
		templateUrl: './templates/comment-card-template.html'
	})
  .when('/locs/:id', {
		templateUrl: './templates/location-card-template.html',
		controller: 'locationsController'
	})
	.when('/locs/:id/cards', {
		templateUrl: './templates/comments-for-location-template.html',
		controller: 'locationsController'
	})
  // .when('/login', {
  //   templateUrl: '/templates/login-template.html',
  //   controller: 'loginController'
  // })
  // .when('/contact', {
  //   templateUrl: '/templates/contact-template.html',
  //   controller: 'mainController'
  // })
	.otherwise({
		redirectTo: '/'
	});
}]);
