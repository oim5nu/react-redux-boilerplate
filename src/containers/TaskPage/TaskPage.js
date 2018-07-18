import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import { taskActions, getVisibleTasks } from './index';
import { connect } from 'react-redux';
import { compose, /*bindActionCreators*/ } from 'redux';
import { withRouter } from 'react-router-dom';


const TaskPage = ({createTask, tasks}) => {
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
      />
    </div>);
};

TaskPage.propTypes = {
  tasks: PropTypes.instanceOf(List),
  createTask: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

//=============================================
// CONNECT
//---------------------------------------------
const mapStateToProps = state => ({
  tasks: getVisibleTasks(state)
});

// with saga no dispatch here ???
const mapDispatchToProps = {
  createTask: taskActions.createTask,
};
/*
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createTask: taskActions.createTask }, dispatch);
};
*/
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// Put 'withRouter' before 'withConnect' here
export default compose(
  withRouter,
  withConnect,
)(TaskPage);
