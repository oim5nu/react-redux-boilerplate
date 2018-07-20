import React from 'react';
import PropTypes from 'prop-types';
//import { List } from 'immutable';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import { taskActions, getVisibleTasks } from './index';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

const TaskPage = ({createTask, removeTask, updateTask, tasks}) => {
  const params = new URLSearchParams(location.search);
  const filter = params.get('filter');

  return(
    <div className="flex flex-column">
      <TaskForm 
        className="f3 f3-ns w-80 center ph3-ns mv2" 
        handleSubmit={createTask}
      />
      <TaskFilter 
        className="f4 f4-ns w-80 center ph3-ns mv2"
      />
      <TaskList
        className="f4 f4-ns w-80 center ph3-ns mv2" 
        tasks={tasks} 
        removeTask={removeTask}
        updateTask={updateTask}
        filter={filter}
      />
    </div>);
};

TaskPage.propTypes = {
  tasks: PropTypes.array.isRequired/*PropTypes.instanceOf(List)*/,
  createTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  filterTasks: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

//=============================================
// CONNECT
//---------------------------------------------
const mapStateToProps = state => ({
  tasks: getVisibleTasks(state)
});

// with saga no dispatch here ???
/*
const mapDispatchToProps = {
  createTask: taskActions.createTask,
  updateTask: taskActions.updateTask,
  removeTask: taskActions.removeTask,
  filterTasks: taskActions.filterTasks,
};
*/

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    createTask: taskActions.createTask,
    updateTask: taskActions.updateTask,
    removeTask: taskActions.removeTask, 
    filterTasks: taskActions.filterTasks,
  }, dispatch);
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// Put 'withRouter' before 'withConnect' here
export default compose(
  withRouter,
  withConnect,
)(TaskPage);
