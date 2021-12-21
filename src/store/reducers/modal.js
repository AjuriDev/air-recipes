import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from '../actions/modal';

const initialState = {
  isOpen: false,
  withoutCloseBtn: false,
  render: null,
};

const modal = createReducer(initialState, (builder) => {
  builder.addCase(openModal, (state, action) => {
    state.isOpen = true;
    state.withoutCloseBtn = action.payload.withoutCloseBtn;
    state.render = action.payload.render;
  });

  builder.addCase(closeModal, (state) => {
    state.isOpen = false;
    state.withoutCloseBtn = false;
    state.render = null;
  });
});

export { modal };
