'use strict';

module.exports = function(app) {
  app.controller('cardsController', ['$scope', 'resource', function($scope, resource) {

    var Card = resource('cards');

    $scope.getAll = function(){
      console.log("getting cards?");
			Card.getAll(function(response){
				console.log(response);
				$scope.cards = response;
			});
		};

    $scope.getOneCard = function(id, oneCard){
      console.log("getting card?");
			Card.getOne(id, oneCard, function(response){
				console.log(response);
				$scope.cards = response;
			});
		};

    $scope.submitForm = function(oneCard) {
			console.log('submitted ' + oneCard);
			Card.submitForm(oneCard, function(response) {
				$scope.getAll();
			});
		};

    $scope.destroy = function(id) {
			console.log(id);
			Card.destroy(id, function(response) {
				$scope.getAll();
			});
		};

    $scope.edit = function(oneCard) {
			oneCard.editing = true;
			console.log(oneCard.editing);
		};

    $scope.cancel = function(oneCard) {
      $scope.getAll();
    };

    $scope.update = function(id, oneCard) {
			console.log("updating " + id);
			Card.update(id, oneCard, function(response) {
				oneCard.editing = false;
				$scope.getAll();
			});
		};
 }]);
};
