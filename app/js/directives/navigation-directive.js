'use strict';

module.exports = function(app) {
  app.directive('navigationDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/navigation/navigation-template.html',
      replace: true
    }
  });
};
