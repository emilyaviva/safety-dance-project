'use strict';

module.exports = function(app) {
  app.directive('commentCardDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/comment-card-template.html',
      replace: true
    }
  });
};
