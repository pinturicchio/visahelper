'use strict';

/* Controllers */

var visaHelperControllers = angular.module('visaHelperControllers', []);

visaHelperControllers.controller('VisaHelperCtrl', ['$scope', '$http',
 function($scope, $http) {
     $http.get('files/avac.json').success(function(data) {
     $scope.avacs = data;
     });
    $scope.orderProp = 'postcode';
}]);


visaHelperControllers.controller('AvacDetailCtrl', ['$scope', '$routeParams',
   function($scope, $routeParams) {
    $scope.avacId = $routeParams.avacId;
  }]);


/*
function VisaHelperCtrl($scope, $http) {
  $http.get('files/avac.json').success(function(data) {
     $scope.avacs = data;
  });

 $scope.orderProp = 'postcode';
}
*/

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];
