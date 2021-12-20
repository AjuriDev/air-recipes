import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useStartFetching } from '../../assets/js/hooks';
import Container from '../../components/_layout/Container';
import Message from '../../components/_utils/Message';
import {
  RecipeDetailed,
  RecipeDetailedLoader,
} from '../../components/RecipeDetailed';
import { fetchRecipe } from '../../store/actions/api';
import { StoreNameSpace } from '../../assets/js/const';

import './RecipeScreen.scss';

const RecipeScreen = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch();

  const {
    item: recipe,
    isFetching,
    isError,
  } = useSelector((state) => state[StoreNameSpace.RECIPE]);

  useEffect(() => {
    dispatch(fetchRecipe(params.id));
  }, [params.id]);

  const isStartFetching = useStartFetching(isFetching);

  if (!isStartFetching) return null;

  return (
    <Container>
      {isError ? (
        <Message isError>An error has occurred!</Message>
      ) : isStartFetching && !isFetching && recipe.id === null ? (
        <Message>Recipe is missing</Message>
      ) : isFetching && recipe.id != params.id ? (
        <RecipeDetailedLoader />
      ) : (
        <RecipeDetailed recipe={recipe} />
      )}
    </Container>
  );
};

export default RecipeScreen;
