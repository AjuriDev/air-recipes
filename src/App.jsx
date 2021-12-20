import { useResponsive } from './assets/js/hooks';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import RecipeScreen from './screens/RecipeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import { AppRoute } from './assets/js/const';

function App() {
  useResponsive();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT.PATH} render={() => <MainScreen />} />
        <Route exact path={AppRoute.RECIPE.PATH + '/:id'} render={() => <RecipeScreen />} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
