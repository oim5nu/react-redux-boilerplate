import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const TaskFilter = ({filter, className}) => {
  const linkClasses = 'link dim gray f5 f4-ns dib mr3';
  return (
    <nav className={className} >
    <span >
      <NavLink 
        className={linkClasses}      
        isActive={() => !filter} 
        to={"/todo"}
      >View All
      </NavLink>
    </span>
    <span className="filter-delimiter" >
      <NavLink 
        className={linkClasses}
        isActive={()=> filter === 'active'} 
        to={{pathname: "/todo", search: "?filter=active"}}
      >Active
      </NavLink>
    </span>
    <span className="filter-delimiter" >
      <NavLink 
        className={linkClasses}
        isActive={()=> filter === 'completed'} 
        to={{pathname: "/todo", search: "?filter=completed"}}
      >Completed
      </NavLink>
    </span>
  </nav>
)};

TaskFilter.propTypes = {
  filter: PropTypes.string,
  className: PropTypes.string
};

export default TaskFilter;