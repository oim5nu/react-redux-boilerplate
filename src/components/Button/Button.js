import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({
  children,
  className,
  ...props
}) => (
  <button
    className={className}
    {...props}
  >
  {children}
  </button>  
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string 
};

export default Button;