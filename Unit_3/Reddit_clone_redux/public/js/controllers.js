redditApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', 'User', function($scope, $http, $parse, $location, $routeParams, User) {

	User.get({id: $routeParams.id}, function(user){
	    $scope.user = user;
	    console.log($scope.user);
	  }, function(err){
	    $scope.error = err;
	   console.log($scope.error);
	});

}]);