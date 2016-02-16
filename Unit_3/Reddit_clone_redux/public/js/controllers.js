redditApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', 'User', 'SignInFormReveal', 'SignUpFormReveal', function($scope, $http, $parse, $location, $routeParams, User, SignInFormReveal, SignUpFormReveal) {
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
			$scope.posts.push({"title": $scope.newPostData.title, "author": $scope.newPostData.author, "image": $scope.newPostData.image, "comment": $scope.newPostData.comment, "date": new Date(), "rating": $scope.number, "comments": [], "addComment": {}, "commentOn": false, "newCommentOn": false});
		};
		$scope.newPostData = {};

		Post.save({user_id: $routeParams.id, post: $scope.posts}, function(){
			$location.path('/');
		});	
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


	$scope.showSignInForm = function(){
		SignInFormReveal.getStatus(true);		
	}		

	$scope.showSignUpForm = function(){
		SignUpFormReveal.getStatus(true);
	}	
}]);

redditApp.controller('errorDisplayController', ['$scope', '$http', '$parse', '$location', '$routeParams', 'SignInFormReveal', 'SignUpFormReveal', function($scope, $http, $parse, $location, $routeParams, SignInFormReveal, SignUpFormReveal) {
	
	$scope.signin = !SignInFormReveal.sendStatus()[0];
	
	$scope.signup = SignUpFormReveal.sendStatus()[0];
	
	
	SignInFormReveal.clearStatus();
	SignUpFormReveal.clearStatus();

}]);