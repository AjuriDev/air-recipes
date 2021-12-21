import PropTypes from 'prop-types';
import { check } from '../../../assets/i/sprite';

import './Checkbox.scss';

const Checkbox = ({ text, ...props }) => {
  return (
    <div className="checkbox-wrapper">
      {text && <span className="checkbox-wrapper__text">{text}</span>}
      <label className="checkbox-wrapper__check">
        <input type="checkbox" className="visually-hidden" {...props} />
        {check}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Checkbox;
