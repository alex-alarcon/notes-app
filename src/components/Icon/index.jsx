import React from 'react';
import { PropTypes } from 'prop-types';

function Icon({ iconName }) {
  return <i className={`fas ${iconName}`} />;
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired
};

export default Icon;
