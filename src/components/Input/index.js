import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Input = ({children, className, ...props}) => (
  <input className={className} {...props}>
    {children}
  </input>
);

Input.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.object
};

export default Input;