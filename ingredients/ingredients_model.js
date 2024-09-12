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

function addIngredients(newIngredient) {
  return db("ingredients")
  .insert(newIngredient, "id")
}

function deleteIngredients(id) {
  return db("ingredients")
  .del()
  .where({ id })
}

function updateIngredients(changes, id) {
  return db("ingredients")
  .update(changes)
  .where({ id })
}





