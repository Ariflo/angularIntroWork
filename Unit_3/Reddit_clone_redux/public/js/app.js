var redditApp = angular.module('redditApp', ['ngRoute', 'ngAnimate', 'ngResource']);

redditApp.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html',
        		controller: 'HomeController'
	})
});