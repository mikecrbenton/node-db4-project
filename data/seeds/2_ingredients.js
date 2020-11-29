
exports.seed = async function(knex) {
   await knex('ingredients').insert([
     {id: 1, ingredient_name: 'ounces of noodles', quantity: 3.5 },
     {id: 2, ingredient_name: 'cup of sauce', quantity: 2.0 },
     {id: 3, ingredient_name: 'ounces of pepperoni', quantity: 5.0 },
     {id: 4, ingredient_name: 'clove of garlic', quantity: 3.0 },
     {id: 5, ingredient_name: 'links of sausage', quantity: 2.0 },
     {id: 6, ingredient_name: 'cup of ricotta', quantity: 1.5 },
     {id: 7, ingredient_name: 'cup of pepper', quantity: .5 },
     {id: 8, ingredient_name: 'Tbsp of oregeno', quantity: .25 },
     {id: 9, ingredient_name: 'Tbsp of olive oil', quantity: 1.0 },
     {id: 10, ingredient_name: 'cup of mushrooms', quantity: .5 },
     {id: 11, ingredient_name: 'cup of dough', quantity: 1 },
     {id: 12, ingredient_name: 'cup of alfredo sauce', quantity: 2 },
   ]);
};


