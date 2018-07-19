import { fromJS } from 'immutable';
import { taskActions } from './actions';

export const initialTaskState = fromJS({
  filter: '',
  loading: false,
  error: false,
  list: []
});

function taskReducer(state = initialTaskState, {payload, type} ) {
  //console.info('payload.tasks', payload.tasks !== undefined ? payload.tasks : null);
  switch (type) {
    case taskActions.LOAD_TASKS_FULFILLED: 
      return state
        .set('loading', false)
        .set('error', false)
        .set('list', fromJS(payload.tasks));
    case taskActions.CREATE_TASK:
      return state
        .set('loading', true)
        .set('error', false);
    case taskActions.CREATE_TASK_FULFILLED: 
      return state
        .set('loading', false)
        .set('error', false)
        .set('list', state
                      .get('list')
                      .push(fromJS(payload.task)
        )
      );
    case taskActions.CREATE_TASK_FAILED:
      return state
        .set('error', fromJS(payload.error))
        .set('loading', false);
    case taskActions.UPDATE_TASK:
      return state
        .set('loading', true)
        .set('error', false);
    case taskActions.UPDATE_TASK_FULFILLED: {
      const indexToUpdate = state.get('list').findIndex(task => {
        return task.get('id') === payload.id;
      });
      
      return state.updateIn(['list', indexToUpdate], task => {
        return task.merge(fromJS(payload.changes));
      });
    }
    case taskActions.UPDATE_TASK_FAILED: 
      return state
        .set('error', fromJS(payload.error))
        .set('loading', false);
    case taskActions.REMOVE_TASK:
      return state
        .set('loading', true)
        .set('error', false);
    case taskActions.REMOVE_TASK_FULFILLED: 
      return state.set('list', state.get('list').filter(task => {
        return task.get('id') !== payload.id
      }));
    case taskActions.REMOVE_TASK_FAILED: 
      return state
        .set('error', fromJS(payload.error))
        .set('loading', false);
  }
  return state;
}

export default taskReducer;