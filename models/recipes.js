const db = require("../data/config")

function getRecipes() {
   return db("recipes")
}

// MANY-TO-MANY RELATIONSHIP
function getShoppingList(recipeId) {
   return db("recipes_ingredients as RI")
      .innerJoin("recipes as R", "R.id", "RI.recipe_id")
      .innerJoin("ingredients as I", "I.id", "RI.ingredient_id")
      .where("R.id", recipeId)
      .select([ "R.id", "R.recipe_name", "I.ingredient_name", "I.quantity" ])
}

// ONE-TO-MANY RELATIONSHIP
function getInstructions(recipeId) {
   return db("recipes as R")
      .innerJoin("steps as S", "R.id", "S.recipe_id")
      .where("R.id", recipeId)
      .select([ "R.id", "R.recipe_name", "S.step_number", "S.directions" ])
      .orderBy("S.step_number")
}

// MANY-TO-MANY RELATIONSHIP
function getIngredient(ingredient) {
   return db("recipes_ingredients as RI")
      .innerJoin("recipes as R", "R.id", "RI.recipe_id")
      .innerJoin("ingredients as I", "I.id", "RI.ingredient_id")
      .where("I.ingredient_name", ingredient)
      .select([ "R.id", "R.recipe_name", "I.ingredient_name", "I.quantity" ])
}

module.exports = {
   getRecipes,
   getShoppingList,
   getInstructions,
   getIngredient
}