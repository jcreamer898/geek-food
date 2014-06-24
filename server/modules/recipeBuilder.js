var fs = require("fs" ),
    dir = require("node-dir"),
    Q = require("Q");

function RecipeBuilder(url) {
    this.url = url;
    this.recipes = [];
    this.categories = {};
}

RecipeBuilder.prototype.build = function() {
    var dfd = Q.defer(),
        self = this;

    try {
        this.readRecipes(this.url, function() {
            self.buildCategories();

            dfd.resolve();
        });
    }
    catch(e) {
        dfd.reject(e);
    }

    return dfd.promise;
};

RecipeBuilder.prototype.readRecipes = function(path, done) {
    var self = this;

    dir.files(this.url, function(err, files) {
        if (err) throw err;

        self.processFiles(files, done);
    });
};

RecipeBuilder.prototype.processFiles = function(files, done) {
    var self = this;

    files.forEach(function(file) {
        if (/recipe\.json/.test(file)) {
            fs.readFile(file, function(err, contents) {
                if (err) throw err;

                self.processRecipe(contents, done);
            });
        }
    });
};

RecipeBuilder.prototype.processRecipe = function(contents, done) {
    var recipe;

    try {
        recipe = JSON.parse(contents);
        this.recipes.push(recipe);
    }
    catch(e) {
        throw new Error("Error parsing recipe...");
    }

    done();
};

RecipeBuilder.prototype.buildCategories = function() {
    var self = this;

    this.recipes.forEach(function(recipe) {
        self.categories[recipe.category] = (self.categories[recipe.category] || 0) + 1;
    });
};

module.exports = RecipeBuilder;