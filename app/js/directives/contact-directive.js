'use strict';

module.exports = function(app) {
  app.directive('contactDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/contact-template.html',
      replace: true
    }
  });
};
