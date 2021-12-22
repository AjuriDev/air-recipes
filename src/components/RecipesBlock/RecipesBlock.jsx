import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RecipeCard, RecipeCardLoader } from './components/RecipeCard';
import Message from '../_utils/Message';
import { getFullFilteredRecipes } from '../../store/selectors';
import findPosition from '../../assets/js/utils/findPosition';
import { StoreNameSpace } from '../../assets/js/const';

import './RecipesBlock.scss';

const LOADER_ITEMS_COUNT = 7;

const RecipesBlock = () => {
  const { isFetching, isFetched, isError } = useSelector(
    (state) => state[StoreNameSpace.RECIPES]
  );

  const { currentRecipes: recipes } = useSelector((state) =>
    getFullFilteredRecipes(state)
  );

  const recipesBlock = useRef(null);

  useEffect(() => {
    if (recipesBlock.current && isFetched) {
      window.scrollTo({
        top: findPosition(recipesBlock.current) - 328, // смещение на высоту хедера с отступом
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [recipes]);

  return (
    <section ref={recipesBlock} className="recipes-block">
      <div className="recipes-block__content">
        {isError ? (
          <Message isError>An error has occurred!</Message>
        ) : isFetched && !isFetching && !recipes?.length > 0 ? (
          <Message>
            <h2 className="recipes-block__title _empty-message">
              Recipes is missing
            </h2>
          </Message>
        ) : (
          <>
            <h2 className="recipes-block__title visually-hidden">
              Try one of these recipes
            </h2>
            <ul className="card-list">
              {isFetching && !recipes?.length > 0 ? (
                new Array(LOADER_ITEMS_COUNT).fill('').map((item, i) => (
                  <li key={i}>
                    <RecipeCardLoader />
                  </li>
                ))
              ) : (
                <>
                  {recipes.map((item) => (
                    <li key={item.id}>
                      <RecipeCard recipe={item} />
                    </li>
                  ))}
                </>
              )}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default RecipesBlock;
