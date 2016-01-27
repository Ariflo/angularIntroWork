angular.module('myApp', ['ngAnimate']).controller('firstController',function($scope){

	$scope.posts = []; 
	$scope.newPostData = {};
	$scope.show = false;
<<<<<<< HEAD
	
=======
	$scope.commentOn = false;
	$scope.newCommentOn = false;

>>>>>>> Comments added
	$scope.postSubmit = function(form){
		$scope.show = true;
		$scope.number = 0;
		if (form.$valid) {
<<<<<<< HEAD
			$scope.posts.push({"title": $scope.newPostData.title, "author": $scope.newPostData.author, "image": $scope.newPostData.image, "comment": $scope.newPostData.comment, "date": new Date(), "rating": $scope.number});
=======
			$scope.posts.push({"title": $scope.newPostData.title, "author": $scope.newPostData.author, "image": $scope.newPostData.image, "comment": $scope.newPostData.comment, "date": new Date(), "comments": [], "addComment": {}});
>>>>>>> Comments added

		};
		$scope.newPostData = {};
	}

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

<<<<<<< HEAD
=======
	$scope.rating = false;
	$scope.votesClicked = function(){
		$scope.rating = !$scope.rating
	}	

	$scope.dateClicked = function(){
		$scope.rating = !$scope.rating
	}	

	$scope.titleClicked = function(){
		$scope.rating = !$scope.rating
	}

	$scope.toggleComments = function() {
		console.log("it's firin'");
		$scope.commentOn= !$scope.commentOn;
	}

	$scope.toggleNewComment = function() {
		console.log("This is also a-firin'");
		$scope.newCommentOn = !$scope.newCommentOn;
	}
>>>>>>> Comments added
});

