var express = require('express');
var path = require('path');
var recipes = require('./routes/recipes');

var app = express();

app.use(function staticsPlaceholder(req, res, next) {
    return next();
});

app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'i am not telling you' }));
app.use(require('body-parser')());


app.get('/api/recipes', recipes.list);
app.get('/api/recipes/categories', recipes.categories);
app.get('/api/recipes/:category', recipes.category);
app.get('/api/recipes/:category/:id', recipes.recipe);

module.exports = app;