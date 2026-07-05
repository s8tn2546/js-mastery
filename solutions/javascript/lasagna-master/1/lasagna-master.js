/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(status){
  if(status == 0){
    return "Lasagna is done.";
  } else if (status > 0){
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer."
  }
}

export function preparationTime(layers, prepTime = 2){
  return layers.length*prepTime;
}

function count(array, item){
  let count = 0;
  for(const element of array){
    if (element === item){
      count++;
    }
  }
  return count;
}

export function quantities(layers){
  let quan = {};
  let noodles = count(layers, "noodles");
  let sauce = count(layers, "sauce");
  quan.noodles = noodles*50;
  quan.sauce = sauce*0.2;
  return quan;
}

export function addSecretIngredient(friendsList, myList){
  const secretIngredient = friendsList[friendsList.length - 1];
  if (!myList.includes(secretIngredient)) {
    myList.push(secretIngredient);
  }
}

export function scaleRecipe(recipe, portion = 2){
  let updatedRecipe = {};
  for(const item in recipe){
    updatedRecipe[item] = recipe[item] * (portion/2) ;
  }
  return updatedRecipe;
}