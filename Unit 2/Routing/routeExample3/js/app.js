var routingApp = angular.module('routingApp', ['ngRoute']);

routingApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode( true );
    $routeProvider 

      .when('/add/:num1/:num2', {
        templateUrl: 'partials/add.html',
        controller: 'calculateController'
      })  

      .when('/add/?x=4&y=3', {
        templateUrl: 'partials/query.html',
        controller: 'calculateQueryController'
      })

      .when('/div/:num1/:num2', {
        templateUrl: 'partials/divide.html',
        controller: 'divController'
      }) 
 
      .otherwise({ redirectTo: '/'});
});