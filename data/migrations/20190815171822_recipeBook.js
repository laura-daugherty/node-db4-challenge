
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string("name", 255)
        .notNullable()
        .unique();
      tbl.string("steps", 4000)
        .notNullable()
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string("name", 255)
        .notNullable()
        .unique()
    })
    .createTable('recipes_ingredients', tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
      tbl.float("quantity", 255)
        .notNullable()
        .unsigned()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
