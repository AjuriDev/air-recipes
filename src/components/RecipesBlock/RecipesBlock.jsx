import { useSelector } from 'react-redux';
import { useStartFetching } from '../../assets/js/hooks';
import { RecipeCard, RecipeCardLoader } from './components/RecipeCard';
import Message from '../_utils/Message';
import { StoreNameSpace } from '../../assets/js/const';

import './RecipesBlock.scss';

const LOADER_ITEMS_COUNT = 7;

const RecipesBlock = () => {
  const {
    items: recipes,
    isFetching,
    isError,
  } = useSelector((state) => state[StoreNameSpace.RECIPES]);

  const isStartFetching = useStartFetching(isFetching);

  return (
    <section className="recipes-block">
      <div className="recipes-block__content">
        <h2 className="recipes-block__title visually-hidden">
          Try one of these recipes
        </h2>

        {isError ? (
          <Message isError>An error has occurred!</Message>
        ) : isStartFetching && !isFetching && !recipes?.length > 0 ? (
          <Message>Recipes is missing</Message>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default RecipesBlock;
