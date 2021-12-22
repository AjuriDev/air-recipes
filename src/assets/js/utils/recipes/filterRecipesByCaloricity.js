const filterRecipesByCaloricity = (recipes, [min, max]) => {
  return recipes.filter(
    (recipe) => recipe.caloricity >= min && recipe.caloricity <= max
  );
};

export default filterRecipesByCaloricity;
