import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  REQUEST_RECIPE: 'recipe/requestRecipe',
  SET_RECIPE: 'recipe/setRecipe',
  SET_RECIPE_ERROR: 'recipe/setRecipeError',
};

const setRecipe = createAction(ActionType.SET_RECIPE, (payload) => ({
  payload,
}));

const requestRecipe = createAction(ActionType.REQUEST_RECIPE);

const setRecipeError = createAction(ActionType.SET_RECIPE_ERROR, (payload) => ({
  payload,
}));

export { ActionType, setRecipe, requestRecipe, setRecipeError };
