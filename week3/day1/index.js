"use strict";
// const myName:string="Abdulluh"
// console.log(myName)
function makeASandwich(ingredients) {
  console.log(
    "Your sandwich includes " +
      ingredients.numberOfItems +
      " items of " +
      ingredients.ingredients +
      ", which comes out to be a total of " +
      ingredients.calories +
      " calories."
  );
}
const sandwichIngredients = {
  numberOfItems: 3,
  ingredients: ["bacon", "lettuce", "tomato"],
  calories: 320,
};
makeASandwich(sandwichIngredients);
