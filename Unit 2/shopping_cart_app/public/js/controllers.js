cartApp.controller('HomeController', ['$scope', '$http', '$parse', '$location', 'cleanCategoriesService', function($scope, $http, $parse, $location, cleanCategoriesService) {

	$http.get('/api/products').then(function(data){
		$scope.teas = data.data;
		$scope.teaArr = [];
		$scope.final = [];

		$scope.teas.forEach(function(tea){
			var noStringArr = $parse(tea.categories);
			$scope.teaArr.push(noStringArr());
		});

		$scope.teaArr.forEach(function(teaArray){

			for(var i = 0; i<teaArray.length; i++){

				if(!$scope.final.includes(teaArray[i])){
					$scope.final.push(teaArray[i]);	
				}	
			}
		});
	});

}]);

cartApp.controller('CartController', ['$scope', '$http',  '$location', function($scope, $http, $location) {
	//..
}]);
