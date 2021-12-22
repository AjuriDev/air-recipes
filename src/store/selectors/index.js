import { createSelector } from 'reselect';
import {
  filterRecipesBySearch,
  filterRecipesByCuisines,
  filterRecipesByCaloricity,
} from '../../assets/js/utils/recipes';
import { getCaloriesRangeFromRecipes } from '../../assets/js/utils/caloricity';
import { getCuisinesFromRecipes } from '../../assets/js/utils/cuisines';
import { StoreNameSpace } from '../../assets/js/const';

const getRecipes = (state) => state[StoreNameSpace.RECIPES].items;
const getSearchQuery = (state) => state[StoreNameSpace.FILTER].searchQuery;
const getSelectedCuisines = (state) => state[StoreNameSpace.FILTER].cuisines;
const getCaloriesRange = (state) => state[StoreNameSpace.FILTER].calories;

const getFullFilteredRecipes = createSelector(
  [getRecipes, getSearchQuery, getSelectedCuisines, getCaloriesRange],
  (recipes, searchQuery, cuisines, calories) => ({
    currentRecipes: filterRecipesByCuisines(
      filterRecipesByCaloricity(
        filterRecipesBySearch(recipes, searchQuery),
        calories
      ),
      cuisines
    ),
  })
);

const getAvailableCuisines = createSelector([getRecipes], (recipes) => ({
  availableCuisines: getCuisinesFromRecipes(recipes),
}));

const getAvailableCaloricityRange = createSelector([getRecipes], (recipes) => ({
  availableCaloricityRange: getCaloriesRangeFromRecipes(recipes),
}));

export {
  getAvailableCuisines,
  getFullFilteredRecipes,
  getAvailableCaloricityRange,
};
