cartApp.filter('kebab', function () {
	return function (input) {
		return input.replace(/_/g, '-');		
  	};
});

cartApp.filter('camel', function () {
	return function (input) {
		for(var i = 0; i<input.length; i++){
			if(input[i] === '_' || input[i] === '-'){
				var letter = input[i + 1].toUpperCase();
				return input.replace(input[i+1], letter).replace(/-/g, '').replace(/_/g, '');
			}
		}		
  	};
});

cartApp.filter('redact', function () {
	return function (input, word) {
		return input.replace(word, 'REDACTED');		
  	};
});