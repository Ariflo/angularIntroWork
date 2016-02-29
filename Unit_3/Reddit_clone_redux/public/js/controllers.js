redditApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', 'User', 'Post' ,'Postit',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams,   User,  Post, Postit) {
	$scope.newPostData = {};
	$scope.reveal = false;
	$scope.isAuthenticated = false;
	$scope.user = {};


	if(localStorage.getItem('jwt')){

		var  token = localStorage.getItem('jwt');
		$http({
			method: "GET",
			url: "/user/" + token
		}).then(function(data) {
			$scope.user.id = data.data.decoded.id;
			$scope.user.username = data.data.decoded.username;
			$scope.isAuthenticated = true;

		}).catch(function(err){
			console.log(err);
			console.log("BAD THING ^^^");
		});
	}
	

	Post.get(function(posts){
		$scope.posts = posts.data;
	})

	
	
	$scope.toggleModal = function(){
	        $scope.showModal = !$scope.showModal;
	};	

	$scope.toggleSignInModal = function(){
	        $scope.showSignInModal = !$scope.showSignInModal;
	};
	

	$scope.signup = function() {
			$http({
				method: "POST",
				url: "/users",
				data: $scope.user
			}).then(function(data) {
				// Save the JWT to localStorage so we can use it later
				localStorage.setItem('jwt', data.data.jwt);
				$scope.user.id = data.data.id
				$scope.isAuthenticated = true;
			}).catch(function(err){
				console.log(err);
				console.log("BAD THING ^^^");
			});
	}

	$scope.login = function() {
			$http({
				method: "POST",
				url: "/login",
				data: $scope.user
			}).then(function(data) {
				// Save the JWT to localStorage so we can use it later
				localStorage.setItem('jwt', data.data.jwt);
				$scope.user.id = data.data.id
				$scope.isAuthenticated = true;
			}).catch(function(err){
				console.log(err);
				console.log("BAD THING ^^^");
			});
	}

	$scope.signedIn = function(){
		$scope.showModal = false;
		$scope.showSignInModal = false;
	}

	$scope.logout = function() {
		localStorage.removeItem('jwt');
		$scope.isAuthenticated = false;
		$scope.user = {};
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

		if($scope.isAuthenticated){
			Postit.update({id:post.id, stat: 'up'}, function(data){
			post.post_score = data.score;
			});
		}
		
	}

	$scope.ratingDown = function(post){
		if($scope.isAuthenticated){
			Postit.update({id:post.id}, function(data){
			post.post_score = data.score;
			});
		}
		
	}

	$scope.toggleComments = function(post) {
		post.commentOn = !post.commentOn;
	}

	$scope.toggleNewComment = function(post) {
		post.newCommentOn= !post.newCommentOn;	
	}
	
}]);