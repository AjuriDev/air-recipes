import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  UPDATE_WINDOW_PARAMS: 'responsive/updateWindowParams',
};

const updateWindowParams = createAction(
  ActionType.UPDATE_WINDOW_PARAMS,
  (payload) => ({ payload })
);

export { ActionType, updateWindowParams };
