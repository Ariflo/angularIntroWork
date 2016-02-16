redditApp.service('User', ["$resource", function ($resource) {
    return $resource('/api/user/:id',{id: "@id"});
}]);