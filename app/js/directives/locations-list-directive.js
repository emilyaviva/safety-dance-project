'use strict';

module.exports = function(app) {
  app.directive('locationsListDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/locations-list-template.html',
      replace: true
    }
  });
};
