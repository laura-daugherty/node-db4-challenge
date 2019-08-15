const express = require('express');

const RecipeBook = require('./recipeBook-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await RecipeBook.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

module.exports = router;

