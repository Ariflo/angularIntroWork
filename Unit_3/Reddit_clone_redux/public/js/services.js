redditApp.service('User', ["$resource", function ($resource) {
    return $resource('/api/user/:id',{id: "@id"});
}]);

redditApp.service('Post', ["$resource", function ($resource) {
    return $resource('/api/user/:id/post',{id: "@id"});
}]);