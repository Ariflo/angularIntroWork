redditApp.service('User', ["$resource", function ($resource) {
    return $resource('/user/:id',{id: "@id"});
}]);

redditApp.service('Post', ["$resource", function ($resource) {
    return $resource('/posts');
}]);

redditApp.service('Postit', ["$resource", function ($resource) {
    return $resource('/posts/:id', { id: '@id' }, { 
	    	'update': {
	     		method: 'PUT' // this method issues a PUT request
	 	}
  	});
}]);

redditApp.service('Comment', ["$resource", function ($resource) {
    return $resource('/comments');
}]);

redditApp.service('authInterceptor', function($window,$location,$q){
	return {
		request: function(config){
			var token = localStorage.getItem('jwt');

			if (token) config.headers.Authorization = 'Bearer ' + token;
			
			return config;
		}
	}
})
