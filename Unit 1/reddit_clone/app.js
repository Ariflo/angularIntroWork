angular.module('myApp', ['ngAnimate']).controller('firstController',function($scope){

	$scope.posts = []; 
	$scope.newPostData = {};
	$scope.show = false; 	

	$scope.postSubmit = function(form){
		$scope.show = true;
		if (form.$valid) {
			$scope.posts.push({"title": $scope.newPostData.title, "author": $scope.newPostData.author, "image": $scope.newPostData.image, "comment": $scope.newPostData.comment, "date": new Date() });

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


<<<<<<< HEAD
});
=======
});
>>>>>>> 05aad0fb911738736216a6d5e8beec8d258e2c01
