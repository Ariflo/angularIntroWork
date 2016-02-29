var redditApp = angular.module('redditApp', ['angularMoment', 'ngRoute', 'ngAnimate', 'ngResource']);

redditApp.config(function($routeProvider, $locationProvider,$httpProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html',
        		controller: 'homeController'
	})	

	.when('/new/error',{
		templateUrl: 'partials/userCopyError.html',
        		controller: 'homeController'
	})	

	.when('/new/sign-in-error',{
		templateUrl: 'partials/signInError.html',
        		controller: 'homeController'
	})

	$httpProvider.interceptors.push('authInterceptor');

});