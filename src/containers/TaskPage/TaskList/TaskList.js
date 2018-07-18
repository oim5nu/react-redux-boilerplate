import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import TaskItem from '../TaskItem';

const TaskList = ({className, tasks}) => {
  return (
    <div className={className}>
        { tasks ? tasks.map(task => {
          return (
            <TaskItem task={task} />
          ); }) : <div>Nothing to display</div>
        }
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.instanceOf(List),
  className: PropTypes.string,
}

export default TaskList;