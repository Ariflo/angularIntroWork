cartApp.controller('HomeController', ['$scope', '$http', '$location',function($scope, $http, $location) {
	$http.get('/api').then(function(data){
		console.log(data);
	});
}]);

cartApp.controller('CartController', ['$scope', '$http',  '$location', function($scope, $http, $location) {
	//..
}]);
