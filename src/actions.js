/**
 *  Action Types
 */
export const ADD_RECIPE = 'ADD_RECIPE';
export const GET_RECIPE = 'GET_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';


/**
 *  Action Creators
 */
export function addRecipe(recipe) {
    return { type: ADD_RECIPE, recipe: recipe };
}

export function getRecipe(index) {
    return { type: GET_RECIPE, index: index };
}

export function removeRecipe(index) {
    return { type: REMOVE_RECIPE, index: index };
}
