'use strict';

module.exports = function(app) {
  app.controller('locationsController', ['$scope', 'resource', function($scope, resource) {

    var Location = resource('locations');

    // var getAll = function(){
    //   Bird.get('/birds').success(function(response){
    //     console.log(response);
    //     $scope.birds = response;
    //   });
    // };
    // getAll();
    $scope.getAll = function(){
      console.log("getting locations?");
			Location.getAll(function(response){
				console.log(response);
				$scope.locations = response;
			});
		};

    $scope.getOneLocation = function(){
      console.log("getting locations?");
			Location.getAll(function(response){
				console.log(response);
				$scope.locations = response;
			});
		};

    // $scope.submitForm = function(oneBirdy) {
    //   console.log(oneBirdy);
    //   console.log("Test");
    //   $http.post('/birds', oneBirdy).success(function(response) {
    //     getAll();
    //   });
    // };
    $scope.submitForm = function(oneLocation) {
			console.log('submitted ' + oneLocation);
			Location.submitForm(oneBirdy, function(response) {
				$scope.getAll();
			});
		};

    // $scope.destroy = function(id) {
    //   console.log(id);
    //   $http.delete('/birds/' + id).success(
    //     function(response) {
    //       console.log(response);
    //       getAll();
    //    }
    //  );
    // };

    $scope.destroy = function(id) {
			console.log(id);
			Location.destroy(id, function(response) {
				$scope.getAll();
			});
		};

    $scope.edit = function(oneLocation) {
			oneLocation.editing = true;
			console.log(oneLocation.editing);
		};

    $scope.cancel = function(oneLocation) {
      $scope.getAll();
    };

    // $scope.update = function(oneBirdy) {
		//     console.log(oneBirdy);
    //     $http.put('/birds/' + oneBirdy._id, oneBirdy)
    //     .error(function (error) {
    //       console.log(error);
    //       //$scope.errors.push({msg: 'could not update bird'});
    //     });
		//       oneBirdy.editing = false;
    //       getAll();
    // };
    $scope.update = function(id, oneLocation) {
			console.log("updating " + id);
			Location.update(id, oneLocation, function(response) {
				oneLocation.editing = false;
				$scope.getAll();
			});
		};
 }]);
};
