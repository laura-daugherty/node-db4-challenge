const express = require('express');

const Ingredients = require('./ingredients-model.js.');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredients.getIngredients;
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get ingredients' });
  }
});

router.post('/', (req, res) => {
  const newIngredients = req.body;
  Ingredients.addIngredient(newIngredient)
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

module.exports = router;