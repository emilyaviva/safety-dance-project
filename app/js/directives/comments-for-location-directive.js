'use strict';

module.exports = function(app) {
  app.directive('commentsForLocationDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/comments-for-location-template.html',
      replace: true
    }
  });
};
