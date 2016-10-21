// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('mathCtrl', ['$scope', function($scope){
  $scope.firstTerm = Math.floor((Math.random() * 1000) - 1);
  $scope.secondTerm = Math.floor((Math.random() * 1000) + 1);
  $scope.validate = 0;
  var operation = Math.floor((Math.random() * 4) + 1);
  var falseResult = Math.floor((Math.random() * 10000) - 1);
  var compareParameter = Math.floor((Math.random() * 2) + 1);

  if (operation == 1) {
    $scope.operationSet = "+";
    if (compareParameter == 1){
      $scope.trueResult = $scope.firstTerm + $scope.secondTerm;
    }
    if (compareParameter == 2){
      $scope.trueResult = falseResult;
    }
    $scope.verify = function(viewParam){
      console.log(viewParam);
      var choice = viewParam;
      console.log(choice);
      if ((compareParameter == 1) && choice){
        console.log(choice);
        $scope.validate += 1;
        console.log($scope.validate);
      }
      else if (compareParameter == 1 && choice == false) {
        console.log(choice);
        $scope.validate = 0;
        console.log($scope.validate);
      }
      else if (compareParameter == 2 && choice == false) {
        console.log(choice);
        $scope.validate += 1;
        console.log($scope.validate);
      }
      else {
        console.log(choice);
        $scope.validate = 0;
        console.log($scope.validate);
      }
    };
  }
  else if (operation == 2) {
    $scope.operationSet = "-";
    if (compareParameter == 1){
      $scope.trueResult = $scope.firstTerm - $scope.secondTerm;
    }
    if (compareParameter == 2){
      $scope.trueResult = falseResult;
    }
    $scope.verify = function(viewParam){
      console.log(viewParam);
      var choice = viewParam;
      console.log(choice);
      if ((compareParameter == 1) && choice){
        console.log(choice);
        $scope.validate += 1;
        console.log($scope.validate);
      }
      else if (compareParameter == 1 && choice == false) {
        console.log(choice);
        $scope.validate = 0;
        console.log($scope.validate);
      }
      else if (compareParameter == 2 && choice == false) {
        console.log(choice);
        $scope.validate += 1;
        console.log($scope.validate);
      }
      else {
        console.log(choice);
        $scope.validate = 0;
        console.log($scope.validate);
      }
    };
  }
  else if (operation == 3) {
    $scope.operationSet = "x";
    if (compareParameter == 1){
      $scope.trueResult = $scope.firstTerm * $scope.secondTerm;
    }
    if (compareParameter == 2){
      $scope.trueResult = falseResult;
    }
    $scope.verify = function(viewParam){
      console.log(viewParam);
      var choice = viewParam;
      console.log(choice);
      if ((compareParameter == 1) && choice){
        console.log(choice);
        $scope.validate += 1;
        console.log($scope.validate);
      }
      else if (compareParameter == 1 && choice == false) {
        console.log(choice);
        $scope.validate = 0;
        console.log($scope.validate);
      }
      else if (compareParameter == 2 && choice == false) {
        console.log(choice);
        $scope.validate += 1;
        console.log($scope.validate);
      }
      else {
        console.log(choice);
        $scope.validate = 0;
        console.log($scope.validate);
      }
    };
  }
  else if (operation == 4) {
    $scope.operationSet = "÷";
    if (compareParameter == 1){
      $scope.trueResult = $scope.firstTerm / $scope.secondTerm;
    }
    if (compareParameter == 2){
      $scope.trueResult = falseResult;
    }
    $scope.verify = function(viewParam){
      console.log(viewParam);
      var choice = viewParam;
      console.log(choice);
      if ((compareParameter == 1) && choice){
        console.log(choice);
        $scope.validate += 1;
        console.log($scope.validate);
      }
      else if (compareParameter == 1 && choice == false) {
        console.log(choice);
        $scope.validate = 0;
        console.log($scope.validate);
      }
      else if (compareParameter == 2 && choice == false) {
        console.log(choice);
        $scope.validate += 1;
        console.log($scope.validate);
      }
      else {
        console.log(choice);
        $scope.validate = 0;
        console.log($scope.validate);
      }
    };
  }
}])
