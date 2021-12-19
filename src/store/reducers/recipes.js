import { createReducer } from '@reduxjs/toolkit';
import {
  setRecipes,
  requestRecipes,
  setRecipesError,
} from '../actions/recipes';

const initialState = {
  isFetching: false,
  isError: false,
  errors: [],
  items: [],
};

const recipes = createReducer(initialState, (builder) => {
  builder.addCase(setRecipes, (state, action) => {
    state.isFetching = false;
    state.items = action.payload.recipes;
  });

  builder.addCase(requestRecipes, (state) => {
    state.isFetching = true;
    state.isError = false;
    state.errors = [];
  });

  builder.addCase(setRecipesError, (state, action) => {
    state.isFetching = false;
    state.isError = true;
    state.errors = action.payload;
  });
});

export { recipes };
