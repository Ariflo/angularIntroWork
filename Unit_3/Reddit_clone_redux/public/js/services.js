redditApp.service('User', ["$resource", function ($resource) {
    return $resource('/api/user/:id',{id: "@id"});
}]);

redditApp.service('Post', ["$resource", function ($resource) {
    return $resource('/api/posts');
}]);

redditApp.service('Postit', ["$resource", function ($resource) {
    return $resource('/api/posts/:id', { id: '@id' }, { 
	    	'update': {
	     		method: 'PUT' // this method issues a PUT request
	 	}
  	});
}]);

redditApp.service('Comment', ["$resource", function ($resource) {
    return $resource('/api/comments');
}]);
