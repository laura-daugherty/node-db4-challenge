const express = require('express');

const Ingredients = require('./ingredients_model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Ingredients.getIngredients()
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })  
});

router.post('/', (req, res) => {
  const newIngredient = req.body;
  Ingredients.addIngredients(newIngredient)
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

router.put('/:id', (req, res) => {
  const changes = req.body;
  const {id} = req.params;
  Ingredients.updateIngredient(changes, id)
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  Ingredients.deleteIngredient(id)
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

module.exports = router;