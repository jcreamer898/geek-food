'use strict';

angular.module('geekFoodApp')
    .directive('gfRecipe', function() {
        return {
            restrict: 'E',
            scope: {
                item: '='
            },
            templateUrl: '/scripts/recipes/recipe.html'
        };
    });