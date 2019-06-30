import React from 'react';
import { PropTypes } from 'prop-types';

function RadioButton({ id, value, checked, onChange }) {
  return (
    <React.Fragment>
      <label className="Radio__Label" htmlFor={value}>
        <input
          id={id}
          className="Radio"
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
      </label>
    </React.Fragment>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

RadioButton.defaultProps = {
  checked: false,
  onChange() {}
};

export default RadioButton;
