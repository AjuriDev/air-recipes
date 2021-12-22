const getCuisinesFromRecipes = (recipes) => {
  if (!recipes.length) return [];

  const cuisinesData = recipes.reduce((acc, { cuisine: { id, title } }) => {
    if (typeof id !== 'undefined' && !acc.hasOwnProperty(id)) {
      acc[id] = title;
    }
    return acc;
  }, {});

  return Object.keys(cuisinesData).reduce((cuisines, cuisineID) => {
    cuisines.push({
      id: cuisineID,
      title: cuisinesData[cuisineID],
    });
    return cuisines;
  }, []);
};

export default getCuisinesFromRecipes;
