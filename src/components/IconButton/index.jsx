import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import Icon from '../Icon';

function IconButton({ iconName, onClick, disabled }) {
  return (
    <button
      type="button"
      className="Button"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon iconName={iconName} />
    </button>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

IconButton.defaultProps = {
  onClick: () => {},
  disabled: true
};
export default IconButton;
