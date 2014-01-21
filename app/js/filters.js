'use strict';

/* Filters */
angular.module('avacNameFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});