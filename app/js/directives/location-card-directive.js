'use strict';

module.exports = function(app) {
  app.directive('locationCardDirective', function() {
    console.log("adding location card");
    return {
      restrict: 'AC',
      templateUrl: 'templates/location-card-template.html',
      replace: true
    }
  });
};
