import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from '../actions/filter';

const initialState = {
  searchQuery: '',
  cuisines: [],
  calories: [0, 0],
};

const filter = createReducer(initialState, (builder) => {
  builder.addCase(setFilter, (state, action) => ({
    ...state,
    ...action.payload,
  }));
});

export { filter };
