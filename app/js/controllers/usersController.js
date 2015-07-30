'use strict';

module.exports = function(app) {
  app.controller('cardsController', ['$scope', 'resource', function($scope, resource) {

    var User = resource('user');

    // $scope.getAll = function(){
    //   console.log("getting cards?");
		// 	Card.getAll(function(response){
		// 		console.log(response);
		// 		$scope.cards = response;
		// 	});
		// };

    $scope.getUserById = function(id, oneUser){
      console.log("getting user?");
			User.getOne(id, oneUser, function(response){
				console.log(response);
				$scope.user = response;
			});
		};

    $scope.submitForm = function(oneUser) {
			User.submitForm(oneUser, function(response) {
				// $scope.getAll();
        console.log("user submitted " + oneUser);
			});
		};

    $scope.destroy = function(id) {
			User.destroy(id, function(response) {
				// $scope.getAll();
        console.log("removed user " + id);
			});
		};

    $scope.edit = function(oneUser) {
      //could be use for password change or something?
			oneUser.editing = true;
			console.log(oneUser.editing);
		};

    $scope.cancel = function(oneUser) {
      // $scope.getAll();  //What to do in this case?
    };

    $scope.update = function(id, oneCard) {
			User.update(id, oneUser, function(response) {
				oneUser.editing = false;
				// $scope.getAll();
        console.log("updating " + id);
			});
		};
 }]);
};
