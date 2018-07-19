import React from 'react';
import PropTypes from 'prop-types';
//import { List } from 'immutable';
import TaskItem from '../TaskItem';

const TaskList = ({className, tasks, updateTask, removeTask}) => {
  return (
    <div className={className}>
        { tasks ? tasks.map((task, index) => {
          return (
            <TaskItem 
              key={index}
              task={task} 
              updateTask={updateTask}
              removeTask={removeTask}
            />
          ); }) : <div>Nothing to display</div>
        }
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  className: PropTypes.string,
  updateTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
}

export default TaskList;