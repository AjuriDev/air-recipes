import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  OPEN_MODAL: 'modal/openModal',
  CLOSE_MODAL: 'modal/closeModal',
};

const openModal = createAction(ActionType.OPEN_MODAL, (payload) => ({
  payload,
}));

const closeModal = createAction(ActionType.CLOSE_MODAL);

export { ActionType, openModal, closeModal };
