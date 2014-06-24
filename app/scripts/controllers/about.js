'use strict';

/**
 * @ngdoc function
 * @name geekFoodApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geekFoodApp
 */
angular.module('geekFoodApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
