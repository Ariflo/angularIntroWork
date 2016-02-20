redditApp.service('User', ["$resource", function ($resource) {
    return $resource('/api/user/:id',{id: "@id"});
}]);

redditApp.service('Post', ["$resource", function ($resource) {
    return $resource('/api/posts');
}]);

redditApp.service('Comment', ["$resource", function ($resource) {
    return $resource('/api/comments', {comment_time: "@comment_time"});
}]);
