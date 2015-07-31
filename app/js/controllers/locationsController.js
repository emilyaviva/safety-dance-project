'use strict';

module.exports = function(app) {
  app.controller('locationsController', ['$scope', '$http', '$location','resource', '$routeParams', function($scope, $http, $location, resource, $routeParams) {

    var Loc = resource('api/locs');
    var Card = resource('api/loc/id/cards')
    $scope.params = $routeParams;

  //  $window.initGoogleMap();

    // var getAll = function(){
    //   Bird.get('/birds').success(function(response){
    //     console.log(response);
    //     $scope.birds = response;
    //   });
    // };
    // getAll();
    $scope.getAll = function(){
      console.log("getting locations?");
			Loc.getAll(function(response){
				console.log(response);
				$scope.locs = response;
			});
		};

    $scope.getOneLoc = function(id){
      console.log("getting location?");
			Loc.getOne(id, function(response){
        $location.path('/locs/' + id);
				console.log(response);
				$scope.loc = response;
			});
		};

    $scope.goToPage = function(newPath) {
      console.log(newPath);
      $location.path(newPath);
    };

    $scope.getCardsForLoc = function(id){
      console.log("getting cards?");
      $http({
        method: 'GET',
        url: 'api/locs/' + id + '/cards'
      })
      .success(function(response){
        console.log(response);
        $scope.cards = response;
      })
      .error(function(data) {
        console.log(data);
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
			Loc.submitForm(oneLocation, function(response) {
			     console.log('submitted ' + oneLocation);
			});
		};

    $scope.AddCardToLoc = function(id, newCardNotes) {
      $http({
        method: 'POST',
        url: 'api/locs/' + id + '/cards',
        data: {'notes': newCardNotes}
      })
      .success(function(response) {
        console.log(response);
      })
      .error(function(data) {
        console.log(data);
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
			Loc.destroy(id, function(response) {
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
			Loc.update(id, oneLocation, function(response) {
				oneLocation.editing = false;
				$scope.getAll();
			});
		};

  }]);
};
