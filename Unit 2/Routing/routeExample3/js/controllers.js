routingApp.controller('calculateController',  ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
  $scope.sum = parseInt($routeParams.num1) + parseInt($routeParams.num2);
  console.log($location); 
}]);

// routingApp.controller('calculateQueryController',  ['$scope','$location', function($scope, $location) {
	
// }]);

routingApp.controller('divController',  ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.quote = parseInt($routeParams.num1) / parseInt($routeParams.num2); ;
}]);
	