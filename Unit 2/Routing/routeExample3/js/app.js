var routingApp = angular.module('routingApp', ['ngRoute']);

routingApp.config(function($routeProvider) {
    $routeProvider     
      .when('/add/:num1/:num2', {
        templateUrl: 'partials/add.html',
        controller: 'calculateController'
      })

      .when('/div/:num1/:num2', {
        templateUrl: 'partials/divide.html',
        controller: 'divController'
      }) 
 
      .otherwise({ redirectTo: '/'});
});