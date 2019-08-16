const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};

function getRecipes() {
  return db('recipes');
}

function addRecipe(newRecipe) {
  return db("recipes")
  .insert(newRecipe, "id");
}

function updateRecipe(changes, id) {
return db("recipes")
  .update(changes)
  .where({ id });
}

function deleteRecipe(id) {
  return db("recipes")
  .del()
  .where({id});
}