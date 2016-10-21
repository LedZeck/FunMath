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
  $scope.score = 0;
  function applicationRun(){
    $scope.firstTerm = Math.floor((Math.random() * 1000) - 1);
    $scope.secondTerm = Math.floor((Math.random() * 1000) + 1);
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
        var choice = viewParam;
        if ((compareParameter == 1) && choice){
          $scope.score += 1;

        }
        else if (compareParameter == 1 && choice == false) {
          $scope.score += 0;

        }
        else if (compareParameter == 2 && choice == false) {
          $scope.score += 1;

        }
        else {
          $scope.score += 0;

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
        var choice = viewParam;
        if ((compareParameter == 1) && choice){
          $scope.score += 1;

        }
        else if (compareParameter == 1 && choice == false) {
          $scope.score += 0;

        }
        else if (compareParameter == 2 && choice == false) {
          $scope.score += 1;

        }
        else {
          $scope.score += 0;

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

        var choice = viewParam
        if ((compareParameter == 1) && choice){
          $scope.score += 1;

        }
        else if (compareParameter == 1 && choice == false) {
          $scope.score += 0;

        }
        else if (compareParameter == 2 && choice == false) {
          $scope.score += 1;

        }
        else {
          $scope.score += 0;

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

        var choice = viewParam
        if ((compareParameter == 1) && choice){
          $scope.score += 1;

        }
        else if (compareParameter == 1 && choice == false) {
          $scope.score += 0;

        }
        else if (compareParameter == 2 && choice == false) {
          $scope.score += 1;

        }
        else {
          $scope.score += 0;

        }
      };
    }
  };
  applicationRun();

}])
