const express = require("express")
const Recipes = require("../models/recipes")
const { checkRecipeId } = require('../middleware/index')

const router = express.Router()


router.get("/recipes", async (req, res, next) => {
	try {
		const recipesFromDB = await Recipes.getRecipes()
		res.json(recipesFromDB)
	} catch(err) {
		next(err)
	}
})

router.get("/recipes/:recipe_id/shoppingList", checkRecipeId, async (req,res, next) => {
   try {
      const shoppingList = await Recipes.getShoppingList(req.params.recipe_id)
      res.json(shoppingList)
   }catch(err){
      next(err)
   }
})

router.get("/recipes/:recipe_id/instructions", checkRecipeId, async (req,res, next) => {
   try {
      const instructions = await Recipes.getInstructions(req.params.recipe_id)
      res.json(instructions)
   }catch(err){
      next(err)
   }
})

// Need to use "%20" for white space in search query URL strings
router.get("/recipes/:ingredient", async (req,res, next) => {
   try {
      const searchedIngredient = await Recipes.getIngredient(req.params.ingredient)
      res.json(searchedIngredient)
   }catch(err){
      next(err)
   }
})



module.exports = router