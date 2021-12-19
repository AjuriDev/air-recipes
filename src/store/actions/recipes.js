import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  REQUEST_RECIPES: 'recipes/requestRecipes',
  SET_RECIPES: 'recipes/setRecipes',
  SET_RECIPES_ERROR: 'recipes/setRecipesError',
};

const setRecipes = createAction(ActionType.SET_RECIPES, (payload) => ({
  payload,
}));

const requestRecipes = createAction(ActionType.REQUEST_RECIPES);

const setRecipesError = createAction(
  ActionType.SET_RECIPES_ERROR,
  (payload) => ({
    payload,
  })
);

export { ActionType, setRecipes, requestRecipes, setRecipesError };
