var redditApp = angular.module('redditApp', ['ngRoute', 'ngAnimate', 'ngResource']);

redditApp.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html',
        		controller: 'homeController'
	})	

	.when('/user/:id',{
		templateUrl: 'partials/home.html',
        		controller: 'homeController'
	})	

	.when('/new/error',{
		templateUrl: 'partials/userCopyError.html',
        		controller: 'errorDisplayController'
	})
});