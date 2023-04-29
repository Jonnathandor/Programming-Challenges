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

 export function cookingStatus(timer){
    if(timer === undefined) return 'You forgot to set the timer.';
    return timer > 0 ? 'Not done, please wait.' : 'Lasagna is done.';
}

export function preparationTime(layers, time = 2){
    if(layers.length === 0) return 0;

    return layers.length * time;
}

export function quantities(layers){
    const noodles = [...layers].filter(ingredient => ingredient === 'noodles');
    const sauce = layers.filter(ingredients => ingredients === 'sauce');

    return { noodles: noodles.length * 50, sauce: sauce.length * 0.2 };
}

export function addSecretIngredient(friendList, myList){
    myList.push(friendList[friendList.length-1]);
}

export function scaleRecipe(recipe, portions){
    const scaledRecipe = { ...recipe };
    for (let ingredient in recipe) {
        scaledRecipe[ingredient] *= (portions / 2);
    }

    return scaledRecipe;
}
