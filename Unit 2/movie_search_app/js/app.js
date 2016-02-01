var movieApp = angular.module('movieSearchApp', ['ngRoute', 'ngAnimate']);

movieApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })   

      .when('/:movie', {
        templateUrl: 'partials/results.html',
        controller: 'ResultsController'
      })    
      
});