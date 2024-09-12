const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  getShoppingList,
  getInstructions
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

function getShoppingList(id) {
  return db("recipes as r")
  .innerJoin("recipes_ingredients as ri", "r.id", "=", "ri.recipe_id")
  .innerJoin("ingredients as i", "i.id", "=", "ri.ingredient_id")
  .select("r.name", "i.name", "ri.quantity")
  .where({ "r.id" : id })
}

function getInstructions(id) {
  return db("recipes")
  .select("recipes.steps")
  .where({ id })
}