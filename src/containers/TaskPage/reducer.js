import { fromJS } from 'immutable';
import { taskActions } from './actions';

export const initialTaskState = fromJS({
  filter: '',
  loading: false,
  error: false,
  tasks: []
});

function taskReducer(state = initialTaskState, {payload, type} ) {
  console.info('reducer type', type);
  switch (type) {
    case taskActions.LOAD_TASK_FULFILLED:
      return state
            .set('loading', false)
            .set('error', false)
            .set('tasks', fromJS(payload.tasks));
    case taskActions.CREATE_TASK:
      return state
            .set('loading', true)
            .set('error', false);
    case taskActions.CREATE_TASK_FULFILLED:
      return state
        .set('tasks', state
                      .get('tasks')
                      .push(fromJS(payload.task)
        )
      );
    
  }
  return state;
}

export default taskReducer;