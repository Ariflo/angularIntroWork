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

	Comment.get(function(comments){
		$scope.comments= comments.comments;
		//console.log($scope.comments);
	});	

	$scope.login = function() {
	    $http({
	        method: "POST",
	        url: "/api/login",
	        data: $scope.user
	    }).then(function(data) {
	        // Save the JWT to localStorage so we can use it later
	        localStorage.setItem('jwt', data.data.jwt);
	    }).catch(function(err){
	        console.log(err);
	        console.log("BAD THING ^^^");
	    });
	}


    	$scope.postSubmit = function(form){
		if (form.$valid) {
				$scope.newPostData.userId = $scope.user.id;
				$scope.newPostData.addComment = {}; 
				$scope.newPostData.commentOn = false; 
				$scope.newPostData.newCommentOn = false;

				Post.save($scope.newPostData, function(){
					$scope.postid = data;
				});

			         };
			         $scope.newPostData = {};	
	};

	$scope.postComment = function(form, post){
		if (form.$valid) {
			post.addComment.userId = $scope.user.id;
			post.addComment.postId = post.id;

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