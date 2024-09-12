const express = require('express');
const helmet = require("helmet");


const RecipeRouter = require('./recipes/recipe-Router.js');
const IngredientsRouter = require('./ingredients/ingredients_router.js');


const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientsRouter)

module.exports = server;