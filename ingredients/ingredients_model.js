const db = require('../data/db-config.js');

module.exports = {
  getIngredients,
  addIngredients,
  deleteIngredients,
  updateIngredients
}


function getIngredients() {
  return db("ingredients")
}

function addIngredients() {
  return db("ingredients")
  .insert(newIngredient, "id")
}

function deleteIngredients() {
  return db("ingredients")
  .del()
  .where({ id })
}

function updateIngredients() {
  return db("ingredients")
  .update(changes)
  .where({ id })
}





