'use strict';

angular.module('geekFoodApp')
    .controller('RecipeCtrl', function(Recipes) {
        var self = this;

        Recipes.query(function(recipes) {
            self.list = recipes;
        });
    });