const express = require('express');

const recipeRouter = require('./recipes/recipe-Router.js');
const IngredientsRouter = require('./ingredients/ingredients_router.js');


const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', IngredientsRouter)

module.exports = server;