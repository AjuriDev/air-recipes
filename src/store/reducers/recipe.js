import { createReducer } from '@reduxjs/toolkit';
import { setRecipe, requestRecipe, setRecipeError } from '../actions/recipe';

const initialState = {
  isFetching: false,
  isError: false,
  errors: [],
  item: {
    id: null,
    title: '',
    description: '',
    caloricity: 0,
    thumbnail: '',
    images: [],
    cuisine: {
      id: null,
      title: '',
    },
    cookTime: 0,
    difficulty: '',
    ingredients: [],
    instructions: [],
  },
};

const recipe = createReducer(initialState, (builder) => {
  builder.addCase(setRecipe, (state, action) => {
    state.isFetching = false;
    state.item = action.payload.recipe;
  });

  builder.addCase(requestRecipe, (state) => {
    state.isFetching = true;
    state.isError = false;
    state.errors = [];
  });

  builder.addCase(setRecipeError, (state, action) => {
    state.isFetching = false;
    state.isError = true;
    state.errors = action.payload;
  });
});

export { recipe };
