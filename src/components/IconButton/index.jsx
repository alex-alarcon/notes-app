import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import Icon from '../Icon';

function IconButton({ iconName, handleClick }) {
  return (
    <button type="button" className="Button" onClick={handleClick}>
      <Icon iconName={iconName} />
    </button>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

IconButton.defaultProps = {
  handleClick: () => {}
};
export default IconButton;
