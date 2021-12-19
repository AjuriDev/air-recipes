import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { fetchRecipe } from '../../store/actions/api';

import './RecipeScreen.scss';

const RecipeScreen = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch();
  console.log(params)

  useEffect(() => {
    dispatch(fetchRecipe(params.id));
  }, [params.id]);

  return <div>Recipe id={params.id}</div>;
};

export default RecipeScreen;
