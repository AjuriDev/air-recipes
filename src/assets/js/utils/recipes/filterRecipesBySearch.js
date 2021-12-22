const filterRecipesBySearch = (recipes, searchQuery) => {
  const preparedQuery = searchQuery.trim().toLowerCase();
  if (!preparedQuery) return recipes;

  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(preparedQuery)
  );
};

export default filterRecipesBySearch;
