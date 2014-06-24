'use strict';

angular.module('geekFoodApp')
    .factory('Recipes', function($resource) {
        return $resource('api/recipes/:category/:id');
    });