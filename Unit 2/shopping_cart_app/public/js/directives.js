cartApp.directive('mtBag', function() {
	  return {
	  	scope:  {
	  		tea: '=tea',
	  		cart: '=cart',
	  	},
	  	templateUrl: '/templates/bagAmt.html',
	  	link: function(scope, element, attrs) {
			scope.addToBag = function(){
				scope.cart.push(scope.tea);
			}
      		}
	  };
});