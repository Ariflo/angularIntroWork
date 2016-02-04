movieApp.controller('HomeController', ['$scope', '$http', '$location', 'moviesService',function($scope, $http, $location, moviesService) {
	$scope.movie = {};

		$scope.callMovieApi = function (title){
			$http.get("http://www.omdbapi.com/?s=" + title).then(function(data){

			    $scope.movies = data.data.Search;
			    moviesService.addMovies($scope.movies);
			    
			    $location.path("/" + title);
			});
		}
	
}]);

movieApp.controller('ResultsController', ['$scope', 'moviesService', '$http',  '$location', function($scope, moviesService, $http, $location) {
			$scope.movies = moviesService.getMovies(); 
			$scope.moviesList = $scope.movies[0]; 
	
			
		$scope.showMeMovie = function (title, id){
			$http.get("http://www.omdbapi.com/?t=" + title).then(function(data){
				
			    $scope.movies = data.data;
			    moviesService.addMovies($scope.movies);

			     $location.path("/movie/" + id);
			});
		}

		
	 	$scope.callMovieApi = function (title){
	 		
	 		$http.get("http://www.omdbapi.com/?s=" + title).then(function(data){

	 		    $scope.movies = data.data.Search;
	 		    moviesService.resetList();
	 		    moviesService.addMovies($scope.movies);
	 		    
	 		    $location.path("/" + title);
	 		});
	 	}
		

}]);

movieApp.controller('movieResultsController', ['$scope', 'moviesService', '$http', "$location", function($scope, moviesService, $http, $location) {
			$scope.movie = moviesService.getMovies();
		

		$scope.callMovieApi = function (title){
			
			$http.get("http://www.omdbapi.com/?s=" + title).then(function(data){

			    $scope.movies = data.data.Search;
			     moviesService.resetList();
			     moviesService.addMovies($scope.movies);
			     
			    $location.path("/" + title);
			});	
		}
}]);