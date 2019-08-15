
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tble => {
    tble.increments();
    tble.text('recipe_name', 128)
    .unique()
    .notNullable();
  })
  .createTable('ingredients', tble => {
    tble.increments();
    tble.text('ingredient_info', 255)
    .notNullable();
    tble.integer('ingredient_quantity')
    .notNullable();

    tble.integer('recipe_id')
    .notNullable();

    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  })
  .createTable('steps', tble => {
    tble.increments();

    tble.text('step_info', 1000)
    .notNullable();

    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
