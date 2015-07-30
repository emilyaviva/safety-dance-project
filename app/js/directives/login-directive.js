'use strict';

module.exports = function(app) {
  app.directive('loginDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/login-template.html',
      replace: true
    }
  });
};
