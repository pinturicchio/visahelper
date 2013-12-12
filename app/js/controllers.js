'use strict';

/* Controllers */
/*var visaHelperApp = angular.module('visaHelperApp', []);

visaHelperApp.controller('VisaHelperCtrl', function ($scope, $http) {
    $http.get('files/avac.json').success(function(data) {
        $scope.avacs = data;
    });
  
    $scope.orderProp = 'postcode';
});
*/


function VisaHelperCtrl($scope, $http) {
  $http.get('files/avac.json').success(function(data) {
     $scope.avacs = data;
  });

 $scope.orderProp = 'postcode';
}

