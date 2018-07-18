import React from 'react';
import PropTypes from 'prop-types';

const Header = ({children, className}) => (
  <div className={className}>{children}</div>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
};

export default Header;