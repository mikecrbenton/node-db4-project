
exports.seed = async function(knex) {
   await knex('recipes').insert([
     {id: 1,  recipe_name: 'spaghetti' },
     {id: 2,  recipe_name: 'lasagna' },
     {id: 3,  recipe_name: 'pizza' },
     {id: 4,  recipe_name: 'calzone' },
     {id: 5, recipe_name: 'fettucini' }
   ]);
};
