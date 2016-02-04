cartApp.controller('HomeController', ['$scope', '$http', '$location',function($scope, $http, $location) {
	$http.get('/api/products').then(function(data){
		$scope.teas = data.data;
		console.log($scope.teas);
	});
}]);

cartApp.controller('CartController', ['$scope', '$http',  '$location', function($scope, $http, $location) {
	//..
}]);
