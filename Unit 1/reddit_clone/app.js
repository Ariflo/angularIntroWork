angular.module('myApp', ['ngAnimate']).controller('firstController',function($scope){

	$scope.posts = []; 
	$scope.newPostData = {};
	$scope.show = false; 	

	$scope.postSubmit = function(form){
		$scope.show = true;
		if (form.$valid) {
			$scope.posts.push({"title": $scope.newPostData.title, "author": $scope.newPostData.author, "image": $scope.newPostData.image, "comment": $scope.newPostData.comment});

		};
		$scope.newPostData = {};
	}
});