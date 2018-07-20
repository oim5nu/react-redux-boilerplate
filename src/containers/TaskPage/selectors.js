import { createSelector } from 'reselect';

export const selectTasks = state => state.get('taskReducer').toJS();

export const selectTaskFilter = state => selectTasks(state).filter;

export const selectTaskList = state => selectTasks(state).list;

//=========================================
// MEMOIZED SELECTORS
//-----------------------------------------

export const getVisibleTasks = createSelector(
  selectTaskFilter,
  selectTaskList,
  (filter, taskList) => {
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