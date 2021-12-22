const getCaloriesRangeFromRecipes = (recipes) => {
  if (!recipes.length) return [0, 0];

  const recipeCaloricities = recipes
    .map(({ caloricity }) => caloricity)
    .sort((a, b) => a - b);
  const min = recipeCaloricities[0];
  const max = recipeCaloricities[recipeCaloricities.length - 1];
  return {
    min,
    max,
  };
};

export default getCaloriesRangeFromRecipes;
