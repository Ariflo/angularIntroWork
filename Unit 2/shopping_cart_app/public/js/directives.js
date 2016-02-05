cartApp.directive('mtCategories', function() {
	  return {
	  	scope:  {
	  		categories: '=categories',
	  	},
	  	restrict: 'A',
	  	templateUrl: '/templates/categories.html',
	  	link: function(scope, element, attrs) {
	  		var arr = [];
		      	for(var i = 0; i<scope.categories.length; i++){
		      		arr.push(scope.categories[i]);
		      	}
      		}
	  };
});