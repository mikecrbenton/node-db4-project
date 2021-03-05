const db = require("../data/config")


const checkRecipeId = (req, res, next) => {
   const id = req.params.recipe_id
   db("recipes")
      .where("id",id)
         .then( foundRecipe => {
            if(foundRecipe[0]) {
               next()
            }else{
               return res.status(404).json(
                  { message: "Recipe ID not found" }
               ) 
            }
         })
         .catch( err => {
            return res.status(404).json(
               { message: "Recipe ID not found" }
            ) 
         })
}

module.exports = { checkRecipeId }