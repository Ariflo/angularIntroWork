angular.module('myApp', ['ngAnimate']).controller('firstController',function($scope){

	$scope.posts = []; 
	$scope.newPostData = {};
	$scope.show = false;
	$scope.commentOn = false;
	$scope.newCommentOn = false;

	$scope.postSubmit = function(form){
		$scope.show = true;
		if (form.$valid) {
			$scope.posts.push({"title": $scope.newPostData.title, "author": $scope.newPostData.author, "image": $scope.newPostData.image, "comment": $scope.newPostData.comment, "date": new Date(), "comments": [], "addComment": {}});

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
	
	$scope.number = 0; 
	$scope.ratingUp = function(){
		$scope.number += 1;
	}

	$scope.ratingDown = function(){
		$scope.number -= 1;
	}

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
});

