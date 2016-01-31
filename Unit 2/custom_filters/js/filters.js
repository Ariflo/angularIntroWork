filterApp.filter('kebab', function () {
	return function (input) {
		return input.replace(/_/g, '-');		
  	};
});

filterApp.filter('camel', function () {
	return function (input) {
		for(var i = 0; i<input.length; i++){
			if(input[i] === '_' || input[i] === '-'){
				var letter = input[i + 1].toUpperCase();
				return input.replace(input[i+1], letter).replace(/-/g, '').replace(/_/g, '');
			}
		}		
  	};
});