import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

function RadioButton({ id, value, checked, onChange }) {
  return (
    <label
      className={`w-4 h-4 border relative inline-block rounded mx-1 ${value} cursor-pointer`}
      htmlFor={id}
      style={{
        borderColor: 'rgba(134,134,134,0.6)'
      }}
    >
      <input
        id={id}
        className="absolute appearance-none"
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <i
        className="fas fa-check absolute text-xs "
        style={{ marginTop: 2, marginLeft: 1, color: 'rgba(134,134,134,0.4)' }}
      />
    </label>
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
