const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  }) 
});

router.post('/', (req, res) => {
  const newRecipe = req.body;
  Recipes.addRecipe(newRecipe)
  .then(recipe => {
    res.status(200).json(newRecipe)
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

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

router.get("/:id/steps", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})



module.exports = router;

