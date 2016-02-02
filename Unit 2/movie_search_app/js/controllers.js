movieApp.controller('HomeController', ['$scope', '$http', '$location', 'moviesService',function($scope, $http, $location, moviesService) {
	$scope.movie = {};

	$scope.callMovieApi = function (title){
		$http.get("http://www.omdbapi.com/?s=" + title +"&r=json").then(function(data){

		    $scope.movies = data.data.Search;
		    moviesService.addMovies($scope.movies);

		    $location.path("/" + title);
		});
	}
}]);

movieApp.controller('ResultsController', ['$scope', 'moviesService', function($scope, moviesService) {
		$scope.movies = moviesService.getMovies(); 
		$scope.moviesList = $scope.movies[0]; 

}]);