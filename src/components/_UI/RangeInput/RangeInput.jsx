import { useState, useEffect } from 'react';
import { Range } from 'react-range';
import PropTypes from 'prop-types';
import { CaloriesRange } from '../../../assets/js/const';

import './RangeInput.scss';

const RangeInput = ({ onChange, values, text }) => {
  const [rangeValues, setRangeValues] = useState(values);

  useEffect(() => {
    setRangeValues(values);
  }, [values]);

  const handleRangeSubmit = () => {
    onChange(rangeValues);
  };

  return (
    <div className="range-input">
      <div className="range-input__wrapper">
        <Range
          step={CaloriesRange.STEP}
          min={CaloriesRange.MIN}
          max={CaloriesRange.MAX}
          values={rangeValues}
          onChange={(range) => setRangeValues(range)}
          onFinalChange={handleRangeSubmit}
          renderTrack={({ props, children }) => (
            <div {...props} className="range-input__track">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="range-input__thumb">
              <span>{props['aria-valuenow']}</span>
            </div>
          )}
        />
      </div>
      {text && <span className="range-input__text">{text}</span>}
    </div>
  );
};

RangeInput.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default RangeInput;
