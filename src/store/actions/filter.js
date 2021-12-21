import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  SET_FILTER: 'filter/setFilter',
};

const setFilter = createAction(ActionType.SET_FILTER, (payload) => ({
  payload,
}));

export { ActionType, setFilter };
