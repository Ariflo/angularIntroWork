redditApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', 'User', 'Post' , 
	                                     function($scope,  $http,  $parse,  $location,   $routeParams,   User,  Post) {
	$scope.posts = []; 
	$scope.newPostData = {};
	$scope.show = false;
	$scope.reveal = false;

	User.get({id: $routeParams.id}, function(user){
		$scope.user = user;
		}, function(err){ 
		console.log(err);
	});	

    	$scope.postSubmit = function(form){
		$scope.show = true;
		if (form.$valid) {
				$scope.number = 0;
				$scope.posts.push({"title": $scope.newPostData.title,
				 		        "image": $scope.newPostData.image, 
				 		        "post_body": $scope.newPostData.post_body, 
				 		        "date": new Date(), 
				 		        "rating": $scope.number, 
				 		        "comments": [], 
				 		        "addComment": {}, 
				 		        "commentOn": false, 
				 		        "newCommentOn": false});

				$scope.newPostData.userId = $scope.user.id;
				
				Post.save($scope.newPostData);

				};
				$scope.newPostData = {};	
	};

	$scope.postComment = function(form, post){
		$scope.show = true;
		if (form.$valid) {
			post.comments.push(post.addComment);
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