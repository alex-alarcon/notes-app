import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import Icon from '../Icon';

function IconButton({ iconName, handleClick, disabled }) {
  return (
    <button
      type="button"
      className="Button"
      onClick={handleClick}
      disabled={disabled}
    >
      <Icon iconName={iconName} />
    </button>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
};

IconButton.defaultProps = {
  handleClick: () => {},
  disabled: true
};
export default IconButton;
