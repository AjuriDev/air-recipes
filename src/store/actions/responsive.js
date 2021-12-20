import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  UPDATE_WINDOW_PARAMS: 'responsive/updateWindowParams',
  UPDATE_DOCUMENT_PARAMS: 'responsive/updateDocumentParams',
};

const updateWindowParams = createAction(
  ActionType.UPDATE_WINDOW_PARAMS,
  (payload) => ({ payload })
);

const updateDocumentParams = createAction(
  ActionType.UPDATE_DOCUMENT_PARAMS,
  (payload) => ({ payload })
);

export { ActionType, updateWindowParams, updateDocumentParams };
