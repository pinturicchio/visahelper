'use strict';

/* App Module */
var visaHelperApp = angular.module('visaHelperApp', [
  'ngRoute',
  'visaHelperControllers'
]);
 
visaHelperApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/avacs', {
        templateUrl: 'partials/avac-list.html',
        controller: 'VisaHelperCtrl'
      }).
      when('/avacs/:avacId', {
        templateUrl: 'partials/avac-detail.html',
        controller: 'AvacDetailCtrl'
      }).
      otherwise({
        redirectTo: '/avacs'
      });
  }]);