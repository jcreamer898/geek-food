'use strict';

/**
 * @ngdoc function
 * @name geekFoodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekFoodApp
 */
angular.module('geekFoodApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
