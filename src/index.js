import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import reducer from './store/root-reducer';
import { redirect } from './store/middlewares/redirect';
import { redirectToRoute } from './store/actions/routing';
import { fetchRecipes } from './store/actions/api';
import { AppRoute } from './assets/js/const';

import './index.scss';

const api = createAPI(
  () => {},
  () => store.dispatch(redirectToRoute(AppRoute.NOT_FOUND)),
  () => {}
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(fetchRecipes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
