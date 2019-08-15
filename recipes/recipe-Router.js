const express = require('express');

const Recipes = require('./recipe-model.js.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes;
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.post('/', (req, res) => {
  const newRecipe = req.body;
  Recipes.addRecipe(newRecipe)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

router.put('/:id', (req, res) => {
  const changes = req.body;
  const {id} = req.params;
  Recipes.updateRecipe(changes, id)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  recipes.deleteRecipe(id)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})



module.exports = router;

