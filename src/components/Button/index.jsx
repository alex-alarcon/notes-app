import React from 'react';
import { PropTypes } from 'prop-types';

function Button({ className, onClick, disabled, children, ...rest }) {
  return (
    <button
      type="button"
      className={`p-2 ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  disabled: false
};

export default Button;
