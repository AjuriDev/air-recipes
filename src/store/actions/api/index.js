import { requestRecipes, setRecipes, setRecipesError } from '../recipes';
import { requestRecipe, setRecipe, setRecipeError } from '../recipe';
import { setFilter } from '../filter';
import { getCuisinesFromRecipes } from '../../../assets/js/utils/cuisines';
import { getCaloriesRangeFromRecipes } from '../../../assets/js/utils/caloricity';
import { APIRoute } from '../../../assets/js/const';

const fetchRecipes = () => (dispatch, _getState, api) => {
  dispatch(requestRecipes());

  api
    .get(APIRoute.RECIPES.PATHNAME + APIRoute.RECIPES.POSTFIX)
    .then((data) => {
      dispatch(setRecipes(data));
      const { min, max } = getCaloriesRangeFromRecipes(data.recipes);
      dispatch(
        setFilter({
          cuisines: getCuisinesFromRecipes(data.recipes).map(({ title }) =>
            title.toLowerCase()
          ),
          calories: [min, max],
        })
      );
    })
    .catch((errors) => dispatch(setRecipesError(errors)));
};

const fetchRecipe = (id) => (dispatch, _getState, api) => {
  dispatch(requestRecipe());

  api
    .get(APIRoute.RECIPE.PATHNAME + id + APIRoute.RECIPES.POSTFIX)
    .then((data) => dispatch(setRecipe(data)))
    .catch((errors) => dispatch(setRecipeError(errors)));
};

export { fetchRecipes, fetchRecipe };
