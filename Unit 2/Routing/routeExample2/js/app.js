var routingApp = angular.module('routingApp', ['ngRoute']);

routingApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/project', {
        templateUrl: 'partials/project.html',
        controller: 'ProjectController'
      })      
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })     
       .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'resumeController'
      })
      .otherwise({ redirectTo: '/'});
});