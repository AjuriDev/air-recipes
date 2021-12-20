import { useMemo } from 'react';
import Gallery from '../_utils/Gallery';
import {
  difficulty as difficultyIcon,
  time as timeIcon,
  calories as caloriesIcon,
  cuisine as cuisineIcon,
} from '../../assets/i/sprite';
import humanizeCookTime from '../../assets/js/utils/humanizeCookTime';
import { recipeDetailed as recipeDetailedTypes } from '../../assets/js/prop-types';

import './RecipeDetailed.scss';

const RecipeDetailed = ({ recipe }) => {
  const {
    title,
    description,
    caloricity,
    images,
    cuisine,
    cookTime,
    difficulty,
    ingredients,
    instructions,
  } = recipe;

  const chips = useMemo(
    () => [
      {
        text: difficulty,
        icon: difficultyIcon,
        mixClass: '_success',
      },
      {
        text: humanizeCookTime(cookTime),
        icon: timeIcon,
      },
      {
        text: caloricity + ' kCal',
        icon: caloriesIcon,
      },
      {
        text: cuisine.title,
        icon: cuisineIcon,
      },
    ],
    [difficulty, cookTime, caloricity, cuisine.title]
  );

  return (
    <section className="recipe-detailed">
      <div className="recipe-detailed__info">
        <h2 className="recipe-detailed__title">{title}</h2>
        <p className="recipe-detailed__description">{description}</p>

        <div className="recipe-detailed__chip-bar">
          {chips.map(({ text, icon, mixClass }) => (
            <div
              key={text}
              className={['chip', '_text', mixClass ? mixClass : ''].join(' ')}
            >
              {icon}
              <span>{text}</span>
            </div>
          ))}
        </div>

        {ingredients.length && (
          <>
            <h3 className="recipe-detailed__list-title">Ingredients</h3>
            <ul className="text-list">
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </>
        )}

        {instructions.length && (
          <>
            <h3 className="recipe-detailed__list-title">Instructions</h3>
            <ol className="text-list">
              {instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>
          </>
        )}
      </div>

      <Gallery images={images} />
    </section>
  );
};

RecipeDetailed.propTypes = {
  recipe: recipeDetailedTypes,
};

export default RecipeDetailed;
