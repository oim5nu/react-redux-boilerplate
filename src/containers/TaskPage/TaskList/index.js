import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const TaskList = ({tasks}) => 
  <div>
    <ul>
      {tasks ? tasks.map(task => {
        console.log('task in TaskList', task);
        return (
          <li key={task.get('id')}>
            <div>{task.get('title')}</div>
          </li>)
      }) : 'Nothing to display'}
    </ul>
  </div>;

TaskList.propTypes = {
  tasks: PropTypes.instanceOf(List)
}

export default TaskList;