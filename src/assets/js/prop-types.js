import PropTypes from 'prop-types';

const cuisine = PropTypes.shape({
  id: PropTypes.oneOfType[
    (PropTypes.string.isRequired, PropTypes.number.isRequired)
  ],
  title: PropTypes.string.isRequired,
});

const recipe = PropTypes.shape({
  id: PropTypes.oneOfType[
    (PropTypes.string.isRequired, PropTypes.number.isRequired)
  ],
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  caloricity: PropTypes.number.isRequired,
  cookTime: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  cuisine,
});

const recipeDetailed = PropTypes.shape({
  ...recipe,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  difficulty: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export { cuisine, recipe, recipeDetailed };
