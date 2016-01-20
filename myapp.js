// Create an angular module, often called an angular application
// The first parameter is the name, the second is a 'dependency list'
var application = angular.module("myapp", []);

// Bind a controller to a module
// The first parameter is a name, the second is a constructor
application.controller("HelloController", function($scope) {
    $scope.hello = {};
    $scope.hello.title = "World";

    $scope.printTitle = function() {
    	console.log($scope.hello.title);
    }
});	