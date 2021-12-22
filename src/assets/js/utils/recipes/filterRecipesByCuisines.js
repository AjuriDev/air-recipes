const filterRecipesByCuisines = (recipes, cuisines) => {
  if (!cuisines.length) return [];

  const preparedCuisines = cuisines.map((cuisine) =>
    cuisine.trim().toLowerCase()
  );

  return recipes.filter((recipe) =>
    preparedCuisines.includes(recipe.cuisine.title.toLowerCase())
  );
};

export default filterRecipesByCuisines;
