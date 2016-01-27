angular.module('myApp', ['ngAnimate']).controller('firstController',function($scope){

	$scope.posts = []; 
	$scope.newPostData = {};
	$scope.show = false;

	$scope.commentOn = false;
	$scope.newCommentOn = false;


	$scope.postSubmit = function(form){
		$scope.show = true;
		if (form.$valid) {
			$scope.number = 0;
			$scope.posts.push({"title": $scope.newPostData.title, "author": $scope.newPostData.author, "image": $scope.newPostData.image, "comment": $scope.newPostData.comment, "date": new Date(), "rating": $scope.number, "comments": [], "addComment": {}});
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

	$scope.toggleComments = function() {
		$scope.commentOn= !$scope.commentOn;
	}

	$scope.toggleNewComment = function() {
		$scope.newCommentOn = !$scope.newCommentOn;
	}
});

