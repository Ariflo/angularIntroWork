cartApp.controller('HomeController', ['$scope', '$http', '$location',function($scope, $http, $location) {
	$http.get('/api').then(function(){
		console.log("Sanity Check");
	});
}]);

cartApp.controller('CartController', ['$scope', '$http',  '$location', function($scope, $http, $location) {
	//..
}]);
