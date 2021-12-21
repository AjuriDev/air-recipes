import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { clear } from '../../../assets/i/sprite';

import './Input.scss';

const Input = ({ isClearable, icon, onChange, value, onClear, ...props }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (inputValue !== value) {
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (inputValue !== value) {
      !!onChange && onChange(inputValue);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClear = (e) => {
    e.preventDefault();
    !!onClear ? onClear() : setInputValue('');
  };

  return (
    <label
      className={[
        'input-wrapper',
        !!icon ? '_with-icon' : '',
        isClearable ? '_clearable' : '',
      ].join(' ')}
    >
      {icon}
      <input value={inputValue} onChange={handleInputChange} {...props} />
      {isClearable && inputValue && (
        <button
          className="input-wrapper__clear"
          type="button"
          onClick={handleInputClear}
          aria-label="Clear search input"
        >
          {clear}
        </button>
      )}
    </label>
  );
};

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  isClearable: PropTypes.bool,
};

export default Input;
