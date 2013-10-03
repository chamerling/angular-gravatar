'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['md5', 'ui.gravatar']);

function myController($scope) {
  $scope.email = 'christophe.hamerling@gmail.com';
  $scope.md5 = 'b6c497af6bc43da74f94095683908ca7';
}