import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

function RadioButton({ id, value, checked, handleChange }) {
  return (
    <React.Fragment>
      <label className="Radio__Label" htmlFor={value}>
        <input
          id={id}
          className="Radio"
          type="radio"
          value={value}
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </React.Fragment>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

RadioButton.defaultProps = {
  checked: false,
  handleChange() {}
};

export default RadioButton;
