routingApp.controller('calculateController',  ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.sum = parseInt($routeParams.num1) + parseInt($routeParams.num2); 
}]);

routingApp.controller('calculateQueryController',  ['$scope','$location', function($scope, $location) {
	console.log($location.search());
}]);

routingApp.controller('divController',  ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.quote = parseInt($routeParams.num1) / parseInt($routeParams.num2); ;
}]);
	