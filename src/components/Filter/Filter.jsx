import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../_UI/Checkbox';
import RangeInput from '../_UI/RangeInput';
import PropTypes from 'prop-types';
import {
  getAvailableCuisines,
  getAvailableCaloricityRange,
} from '../../store/selectors';
import { setFilter } from '../../store/actions/filter';
import { StoreNameSpace, CALORICITY_RANGE_STEP } from '../../assets/js/const';

import './Filter.scss';

const Filter = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const { cuisines, calories } = useSelector(
    (state) => state[StoreNameSpace.FILTER]
  );
  const { availableCuisines } = useSelector(getAvailableCuisines);
  const { availableCaloricityRange } = useSelector(getAvailableCaloricityRange);

  const [selectedCuisines, setSelectedCuisines] = useState({});
  const [caloriesRange, setCaloriesRange] = useState(calories);
  const [isClearable, setIsClearable] = useState(false);

  useEffect(() => {
    setSelectedCuisines(
      availableCuisines.reduce((acc, { title: cuisineName }) => {
        acc[cuisineName.toLowerCase()] = cuisines.includes(
          cuisineName.toLowerCase()
        );
        return acc;
      }, {})
    );
  }, [cuisines, availableCuisines]);

  useEffect(() => {
    const isAllCuisinesChecked = Object.keys(selectedCuisines).some(
      (cuisine) => !selectedCuisines[cuisine]
    );

    const [min, max] = caloriesRange;
    const isRangeSelected =
      max - min < availableCaloricityRange.max - availableCaloricityRange.min;

    setIsClearable(isAllCuisinesChecked || isRangeSelected);
  }, [selectedCuisines, caloriesRange, availableCaloricityRange]);

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
      availableCuisines.reduce((acc, { title }) => {
        acc[title.toLowerCase()] = true;
        return acc;
      }, {})
    );

    setCaloriesRange([
      availableCaloricityRange.min,
      availableCaloricityRange.max,
    ]);
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
        {availableCuisines.map(({ id, title: cuisineName }) => (
          <li key={id}>
            <Checkbox
              checked={selectedCuisines[cuisineName.toLowerCase()] || false}
              onChange={handleCuisineChange}
              text={cuisineName}
              name={cuisineName.toLowerCase()}
            />
          </li>
        ))}
      </ul>

      <RangeInput
        onChange={handleCaloriesChange}
        values={caloriesRange}
        text="Calories, kCal"
        min={availableCaloricityRange.min}
        max={availableCaloricityRange.max}
        step={CALORICITY_RANGE_STEP}
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
