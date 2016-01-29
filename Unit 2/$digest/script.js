angular.module("applydigest",[]).controller("MainController", function($rootScope, $scope){
  $rootScope.name = "Fido"
  $scope.age = 3

  // this is for example purposes
  // NOTE - there is a $timeout which handles $apply for you
  setTimeout(function(){
    $rootScope.name = "Lassie"
    $scope.age = 10
    $scope.$digest()
    // $scope.$apply()
  },1000)
})

//Make a guess before you run the code. What will this code log?
function x() {
    var a = true;
    var y = function() {
        a = false;
    }

    setTimeout(function(){
        console.log(a);
    }, 1000);

    return y;
}

var outsideY = x();

setTimeout(outsideY, 500);