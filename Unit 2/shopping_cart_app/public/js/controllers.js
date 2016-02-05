cartApp.controller('HomeController', ['$scope', '$http', '$parse', '$location', 'passCartService', function($scope, $http, $parse, $location, passCartService) {

	$http.get('/api/products').then(function(data){
		$scope.teas = data.data;
		$scope.teaArr = [];
		$scope.final = [];

		
		$scope.teas.forEach(function(tea){
			var noStringArr = $parse(tea.categories);

			$scope.teaArr.push(noStringArr());
			tea.categories = noStringArr();
			tea.quantity = 1;
		});

		$scope.teaArr.forEach(function(teaArray){

			for(var i = 0; i<teaArray.length; i++){

				if(!$scope.final.includes(teaArray[i])){
					$scope.final.push(teaArray[i]);	
				}	
			}
		});
	});

	$scope.cart = [];

	$scope.displayCart = function(){
		passCartService.addCart($scope.cart);
		$location.path('/cart');
	}
}]);

cartApp.controller('CartController', ['$scope', '$http',  '$location', 'passCartService',  function($scope, $http, $location, passCartService) {
	$scope.bool = true
	$scope.cartData = passCartService.getCart();
	$scope.cart = $scope.cartData[0];
	$scope.total = 0; 

	$scope.cart.forEach(function(item){
		$scope.total += (item.price * item.quantity); 
	});
	

	$scope.removeFromCart = function(item){
		for(var i = 0; i<$scope.cart.length; i++){
			if ($scope.cart[i]._id === item._id){
				$scope.cart.splice(i,1); 
			}  
		}
	}

	$scope.editCart = function(){
		$scope.bool = !$scope.bool;
	}	

	$scope.saveCart = function(){
		$scope.bool = !$scope.bool;
		$scope.total = 0;
		$scope.cart.forEach(function(item){
			$scope.total += (item.price * item.quantity); 
		});
	}


}]);
