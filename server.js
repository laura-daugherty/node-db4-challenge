const express = require('express');

const recipeBookRouter = require('./recipe-book/recipeBook-Router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeBookRouter);

module.exports = server;