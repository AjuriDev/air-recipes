import PropTypes from 'prop-types';

const cuisine = PropTypes.shape({
  id: PropTypes.oneOfType[
    (PropTypes.string, PropTypes.number)
    ].isRequired,
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

export {
  cuisine,
  recipe,
};
