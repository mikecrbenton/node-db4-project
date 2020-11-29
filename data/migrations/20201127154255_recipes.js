/* KNEX-MIGRATE USAGE
  $ knex-migrate <command> [options]

Commands
  generate  Generate migration
  pending   Lists all pending migrations
  list      Lists all executed migrations
  up        Performs all pending migrations
  down      Rollbacks last migration
  rollback  Rollbacks last batch of migrations
  redo      Rollbacks last batch and performs all migrations
*/


exports.up = async function(knex) {
   await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("recipe_name").notNull()
   })
   await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("ingredient_name").notNull()
      table.float("quantity").notNull()
   })
   await knex.schema.createTable("recipes_ingredients", (table) => {
      table
       .integer("recipe_id")
       .references("id")
       .inTable("recipes")
       .onDelete("CASCADE") // DELETES 
       .onUpdate("CASCADE") // UPDATES REFERENCES
       .notNull()
      table
       .integer("ingredient_id")
       .references("id")
       .inTable("ingredients")
       .onDelete("CASCADE") // DELETES 
       .onUpdate("CASCADE") // UPDATES REFERENCES
       .notNull()
      table.primary(['recipe_id', 'ingredient_id'])
   })
   await knex.schema.createTable("steps", (table) => {
      table.increments("id")
      table.integer("step_number").notNull()
      table.text("directions").notNull()
      table.integer("recipe_id").references("id").inTable("recipes")
   })
};

exports.down = async function(knex) {
   await knex.schema.dropTableIfExists("steps")
   await knex.schema.dropTableIfExists("recipes_ingredients")
   await knex.schema.dropTableIfExists("ingredients")
   await knex.schema.dropTableIfExists("recipes")
};
