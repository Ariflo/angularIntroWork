movieApp.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$scope.movie = {};

	$scope.callMovieApi = function (title){
		$http.get('http://www.omdbapi.com/?t=' + title).then(function(data){
		    $scope.movieData = data.data;
		    $location.path("/" + title);
		});
	}
}]);

movieApp.controller('ResultsController', ['$scope', '$routeParams', function($scope) {
	
}]);