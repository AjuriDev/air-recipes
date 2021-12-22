import { useHistory } from 'react-router-dom';
import { recipe as recipeTypes } from '../../../../assets/js/prop-types';
import humanizeCookTime from '../../../../assets/js/utils/recipes/humanizeCookTime';
import { AppRoute } from '../../../../assets/js/const';

import './RecipeCard.scss';

const RecipeCard = ({
  recipe: { id, title, description, caloricity, cookTime, thumbnail, cuisine },
}) => {
  const history = useHistory();

  const handleRecipeDetailOpen = () => {
    history.push(`${AppRoute.RECIPE.PATH}/${id}`);
  };

  return (
    <article className="recipe-card" onClick={handleRecipeDetailOpen}>
      <header className="recipe-card__top">
        <div className="recipe-card__image">
          <img src={thumbnail} alt="dish" />
        </div>
        <div className="recipe-card__chip-bar">
          {[
            humanizeCookTime(cookTime),
            caloricity + ' kCal',
            cuisine.title,
          ].map((item) => (
            <div key={item} className="chip">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </header>
      <div className="recipe-card__content">
        <h3 className="recipe-card__title">{title}</h3>
        <p className="recipe-card__description">{description}</p>
      </div>
    </article>
  );
};

RecipeCard.propTypes = {
  recipe: recipeTypes.isRequired,
};

export default RecipeCard;
