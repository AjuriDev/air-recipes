import { createReducer } from '@reduxjs/toolkit';
import {
  setRecipes,
  requestRecipes,
  setRecipesError,
} from '../actions/recipes';

const initialState = {
  isFetching: false,
  isFetched: false,
  isError: false,
  errors: [],
  items: [],
};

const recipes = createReducer(initialState, (builder) => {
  builder.addCase(setRecipes, (state, action) => {
    state.isFetching = false;
    state.isFetched = true;
    state.items = action.payload.recipes;
  });

  builder.addCase(requestRecipes, (state) => {
    state.isFetching = true;
    state.isFetched = false;
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
