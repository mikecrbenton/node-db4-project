
exports.seed = async function(knex) {
   await knex('steps').insert([
     {id: 1, step_number: 1, directions: 'step 1 for spaghetti ', recipe_id: 1 },
     {id: 2, step_number: 2, directions: 'step 2 for spaghetti ', recipe_id: 1 },
     {id: 3, step_number: 3, directions: 'step 3 for spaghetti ', recipe_id: 1 },
     {id: 4, step_number: 4, directions: 'step 4 for spaghetti ', recipe_id: 1 },
     {id: 5, step_number: 1, directions: 'step 1 for lasagna ', recipe_id: 2 },
     {id: 6, step_number: 2, directions: 'step 2 for lasagna ', recipe_id: 2 },
     {id: 7, step_number: 3, directions: 'step 3 for lasagna ', recipe_id: 2 },
     {id: 8, step_number: 4, directions: 'step 4 for lasagna ', recipe_id: 2 },
     {id: 9, step_number: 1, directions: 'step 1 for pizza ', recipe_id: 3 },
     {id: 10, step_number: 2, directions: 'step 2 for pizza ', recipe_id: 3 },
     {id: 11, step_number: 3, directions: 'step 3 for pizza ', recipe_id: 3 },
     {id: 12, step_number: 4, directions: 'step 4 for pizza ', recipe_id: 3 },
     {id: 13, step_number: 1, directions: 'step 1 for calzone ', recipe_id: 4 },
     {id: 14, step_number: 2, directions: 'step 2 for calzone ', recipe_id: 4 },
     {id: 15, step_number: 3, directions: 'step 3 for calzone ', recipe_id: 4 },
     {id: 16, step_number: 4, directions: 'step 4 for calzone ', recipe_id: 4 },
     {id: 17, step_number: 1, directions: 'step 1 for fetticini ', recipe_id: 5 },
     {id: 18, step_number: 2, directions: 'step 2 for fetticini ', recipe_id: 5 },
     {id: 19, step_number: 3, directions: 'step 3 for fetticini ', recipe_id: 5 },
     {id: 20, step_number: 4, directions: 'step 4 for fetticini ', recipe_id: 5 }
   ]);
};
