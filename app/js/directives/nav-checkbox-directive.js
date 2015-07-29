'use strict';

module.exports = function(app) {
  app.directive('navCheckboxDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/navigation/nav-checkbox-template.html',
      replace: true
    }
  });
};
