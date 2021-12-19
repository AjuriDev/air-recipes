import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  REQUEST_RECIPE: 'recipes/requestRecipe',
  SET_RECIPE: 'recipes/setRecipe',
  SET_RECIPE_ERROR: 'recipes/setRecipeError',
};

const setRecipe = createAction(ActionType.SET_RECIPE, (payload) => ({
  payload,
}));

const requestRecipe = createAction(ActionType.REQUEST_RECIPE);

const setRecipeError = createAction(ActionType.SET_RECIPE_ERROR, (payload) => ({
  payload,
}));

export { ActionType, setRecipe, requestRecipe, setRecipeError };
