import { createSelector } from 'reselect';

export const selectTasks = state => {
  console.log("state.get('taskReducer').toJS()", state.get('taskReducer').toJS());
  return state.get('taskReducer');
}

export const selectTaskFilter = state => selectTasks(state).get('filter');

export const selectTaskList = state => {
  console.log("selectTasks(state).toJS()", selectTasks(state).toJS());
  return selectTasks(state).get('list');
};

//=========================================
// MEMOIZED SELECTORS
//-----------------------------------------

export const getVisibleTasks = createSelector(
  selectTaskFilter,
  selectTaskList,
  (filter, taskList) => {
    console.log('filter', filter);
    console.log('taskList', taskList.toJS());
    switch (filter) {
      case 'active': 
        return taskList.filter(task => !task.completed);
      case 'completed':
        return taskList.filter(task => task.completed);
      default:
        return taskList;
    }
  }
);