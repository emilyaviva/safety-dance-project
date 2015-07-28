'use strict';

module.exports = function(app) {
  app.directive('navTriggerDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/navigation/nav-trigger-template.html',
      replace: true
    }
  });
};
