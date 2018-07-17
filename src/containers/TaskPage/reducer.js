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
    case taskActions.CREATE_TASK_FULFILLED: {
      return state
        .set('list', state
                      .get('list')
                      .push(fromJS(payload.task)
        )
      );
    }
  }
  return state;
}

export default taskReducer;