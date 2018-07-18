import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

const TaskFilter = ({className}) => (
  <div className={className} >
    <span>View All /</span>
    <span>Active /  </span>
    <span>Completed</span>
  </div>
);

TaskFilter.propTypes = {
  className: PropTypes.string
};

export default TaskFilter;