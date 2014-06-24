var RecipeBuilder = require('../modules/recipeBuilder'),
    builder = new RecipeBuilder(__dirname + "/../../recipes");

builder.build();

var routes = {
    list: function(req, res) {
        res.send(builder.recipes);
    },
    category: function(req, res) {
        var category = req.params.category,
            byCategory = builder.recipes.filter(function(recipe) {
                return recipe.category.toLowerCase() === category.toLowerCase();
            });

        res.send(byCategory);
    },
    recipe: function(req, res) {
        res.send(builder.recipes[req.params.id]);
    },
    categories: function(req, res) {
        res.send(builder.categories);
    }
};

module.exports = routes;