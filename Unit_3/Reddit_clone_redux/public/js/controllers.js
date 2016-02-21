redditApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', 'User', 'Post' , 'Comment' ,
	                                     function($scope,  $http,  $parse,  $location,   $routeParams,   User,  Post, Comment) {
	$scope.newPostData = {};
	$scope.show = false;
	$scope.reveal = false;

	User.get({id: $routeParams.id}, function(user){
		$scope.user = user;
		}, function(err){ 
		console.log(err);
	});	

	Post.get(function(posts){
		console.log(posts);
		$scope.posts = posts.posts;
	});

    	$scope.postSubmit = function(form){
		$scope.show = true;
		if (form.$valid) {
				$scope.newPostData.userId = $scope.user.id;
				Post.save($scope.newPostData, function(data){
					$scope.postid = data;
				});

			         };
			         $scope.newPostData = {};	
	};

	$scope.postComment = function(form, post){
		$scope.show = true;
		if (form.$valid) {
			post.comments.push(post.addComment);

			post.addComment.userId = $scope.user.id;
			post.addComment.postId = $scope.postid;
			Comment.save(post.addComment);

			post.addComment = {};
			
		};
	
		$scope.newPostData = {};
	}
	
	$scope.ratingUp = function(post){
		post.rating += 1;
	}

	$scope.ratingDown = function(post){
		post.rating -= 1;
	}

	$scope.toggleComments = function(post) {
		post.commentOn= !post.commentOn;
		post.newCommentOn = false;
	}

	$scope.toggleNewComment = function(post) {
		post.newCommentOn= !post.newCommentOn;
		post.commentOn = false;
	}

	$scope.showStuff = function(){
		$scope.reveal = !$scope.reveal; 
	}
	
}]);