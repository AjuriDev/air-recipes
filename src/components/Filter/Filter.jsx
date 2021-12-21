import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../_UI/Checkbox';
import RangeInput from '../_UI/RangeInput';
import PropTypes from 'prop-types';
import { setFilter } from '../../store/actions/filter';
import { Cuisines, StoreNameSpace, CaloriesRange } from '../../assets/js/const';

import './Filter.scss';

const Filter = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const { cuisines, calories } = useSelector(
    (state) => state[StoreNameSpace.FILTER]
  );

  const [selectedCuisines, setSelectedCuisines] = useState({});
  const [caloriesRange, setCaloriesRange] = useState(calories);
  const [isClearable, setIsClearable] = useState(false);

  useEffect(() => {
    setSelectedCuisines(
      Object.keys(Cuisines).reduce((acc, cuisine) => {
        acc[cuisine] = cuisines.includes(cuisine);
        return acc;
      }, {})
    );
  }, [cuisines]);

  useEffect(() => {
    const isAllCuisinesChecked = Object.keys(selectedCuisines).some(
      (cuisine) => !selectedCuisines[cuisine]
    );

    const [min, max] = caloriesRange;
    const isRangeSelected = max - min < CaloriesRange.MAX - CaloriesRange.MIN;

    setIsClearable(isAllCuisinesChecked || isRangeSelected);
  }, [selectedCuisines, caloriesRange]);

  const handleCuisineChange = (e) => {
    setSelectedCuisines((oldCuisines) => ({
      ...oldCuisines,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleCaloriesChange = (values) => {
    setCaloriesRange(values);
  };

  const handleFilterReset = (e) => {
    e.preventDefault();

    setSelectedCuisines(
      Object.keys(Cuisines).reduce((acc, cuisine) => {
        acc[cuisine] = true;
        return acc;
      }, {})
    );

    setCaloriesRange([CaloriesRange.MIN, CaloriesRange.MAX]);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    const confirmedCuisines = Object.keys(selectedCuisines).reduce(
      (acc, cuisine) => {
        if (selectedCuisines[cuisine]) {
          acc.push(cuisine);
        }
        return acc;
      },
      []
    );
    dispatch(
      setFilter({ cuisines: confirmedCuisines, calories: caloriesRange })
    );

    onSubmit();
  };

  return (
    <form className="filter" onSubmit={handleFilterSubmit}>
      <h2 className="filter__title">Filter</h2>

      <ul className="filter__list">
        {Object.values(Cuisines).map((cuisine) => (
          <li key={cuisine}>
            <Checkbox
              checked={selectedCuisines[cuisine] || false}
              onChange={handleCuisineChange}
              text={cuisine}
              name={cuisine}
            />
          </li>
        ))}
      </ul>

      <RangeInput
        onChange={handleCaloriesChange}
        values={caloriesRange}
        text="Calories, kCal"
      />

      <footer className="filter__controls">
        {isClearable && (
          <button
            className="filter__reset"
            type="button"
            onClick={handleFilterReset}
          >
            Clear
          </button>
        )}
        <button className="filter__submit" type="submit">
          Show Recipes
        </button>
      </footer>
    </form>
  );
};

Filter.propTypes = {
  onSubmit: PropTypes.func,
};

export default Filter;
