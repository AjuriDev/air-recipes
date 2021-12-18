import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  REDIRECT_TO_ROUTE: 'routing/redirectToRoute',
};

const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (payload) => ({ payload })
);

export { ActionType, redirectToRoute };
