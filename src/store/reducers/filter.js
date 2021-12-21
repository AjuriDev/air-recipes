import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from '../actions/filter';
import { Cuisines, CaloriesRange } from '../../assets/js/const';

const initialState = {
  searchQuery: '',
  cuisines: Object.values(Cuisines),
  calories: [CaloriesRange.MIN, CaloriesRange.MAX],
};

const filter = createReducer(initialState, (builder) => {
  builder.addCase(setFilter, (state, action) => ({
    ...state,
    ...action.payload,
  }));
});

export { filter };
