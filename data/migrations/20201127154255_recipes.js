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
   await knex.schema.createTable("zoos_animals", (table) => {
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
      table.primary("recipe_id")
   })
};

exports.down = async function(knex) {
   await knex.schema.dropTableIfExists("ingredients")
   await knex.schema.dropTableIfExists("recipes")
};
