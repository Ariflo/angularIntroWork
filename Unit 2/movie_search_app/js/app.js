var movieApp = angular.module('movieSearchApp', ['ngRoute', 'ngAnimate']);

movieApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })   

      .when('/:movie', {
        templateUrl: 'partials/results.html',
        controller: 'ResultsController'
      })    

      $locationProvider.html5Mode( false );
});

