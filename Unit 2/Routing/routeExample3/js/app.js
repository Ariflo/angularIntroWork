var routingApp = angular.module('routingApp', ['ngRoute']);

routingApp.config(function($routeProvider, $locationProvider) {
  
    $routeProvider 

      .when('/add/:num1/:num2', {
        templateUrl: 'partials/add.html',
        controller: 'calculateController'
      })  

      // .when('/add/:sum', {
      //   templateUrl: 'partials/query.html',
      //   controller: 'calculateQueryController'
      // })

      .when('/div/:num1/:num2', {
        templateUrl: 'partials/divide.html',
        controller: 'divController'
      }) 
 
      .otherwise({ redirectTo: '/'});

      $locationProvider.html5Mode( true );
});

