import { useResponsive } from './assets/js/hooks';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import RecipeScreen from './screens/RecipeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import Header from './components/_layout/Header';
import Modal from './components/_layout/Modal';
import { AppRoute } from './assets/js/const';

function App() {
  useResponsive();

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={AppRoute.ROOT.PATH} render={() => <MainScreen />} />
        <Route
          exact
          path={AppRoute.RECIPE.PATH + '/:id'}
          render={() => <RecipeScreen />}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>

      <Modal />
    </BrowserRouter>
  );
}

export default App;
