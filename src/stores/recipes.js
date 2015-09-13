import { createStore } from 'redux';

import {
    ADD_RECIPE, GET_RECIPE, REMOVE_RECIPE
} from '../actions';


export const initialState = [
    { name: 'Havregrynsgröt' },
    { name: 'Risgrynsgröt' },
    { name: 'Havregrynsgröt' },
    { name: 'Chokladbollar' }
];

const addRecipe =
    (recipes = [], recipe) =>
        recipes.push(recipe);

const removeRecipe =
    (recipes = [], indexToRemove) =>
        recipes.filter((value, index) => {
            if(indexToRemove === index)
                return false;
            return true;
        });

export const recipes =
    (state = initialState, action) => {
    switch(action.type) {
        case ADD_RECIPE:
            return addRecipe(state, action.recipe);
        case REMOVE_RECIPE:
            return removeRecipe(state, action.index);
        default:
            return state;
    }
}

//export let recipeStore = createStore(recipes);

//console.log(recipeStore.dispatch({ type: 'FETCH' }));
