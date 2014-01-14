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


visaHelperControllers.controller('AvacDetailCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http) {
    $scope.avacPinyin = $routeParams.avacPinyin;
    $http.get('files/' + $routeParams.avacPinyin + '.json').success(function(data) {
    $scope.avacRegions = data;
    });
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
