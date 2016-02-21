redditApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', 'User', 'Post' , 'Comment' ,'Postit',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams,   User,  Post, Comment, Postit) {
	$scope.newPostData = {};
	$scope.show = false;
	$scope.reveal = false;

	User.get({id: $routeParams.id}, function(user){
		$scope.user = user;
		}, function(err){ 
		console.log(err);
	});	

	Post.get(function(posts){
		$scope.show = true;
		$scope.posts = posts.data;
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
		Postit.update({id:post.id, stat: 'up'}, function(data){
			post.post_score = data.score;
		});
	}

	$scope.ratingDown = function(post){
		Postit.update({id:post.id}, function(data){
			post.post_score = data.score;
		});
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