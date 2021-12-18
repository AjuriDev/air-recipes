import './RecipeScreen.scss';
import { useRouteMatch } from 'react-router-dom';

const RecipeScreen = () => {
  const { params } = useRouteMatch();
  console.log(params)
  return <div>Recipe id={params.id}</div>;
};

export default RecipeScreen;
