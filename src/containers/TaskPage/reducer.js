import { fromJS } from 'immutable';
import { taskActions } from './actions';

export const initialTaskState = fromJS({
  filter: '',
  loading: false,
  error: false,
  list: []
});

function taskReducer(state = initialTaskState, {payload, type} ) {
  console.info('reducer type', type);
  switch (type) {
    case taskActions.LOAD_TASK_FULFILLED:
      return state
            .set('loading', false)
            .set('error', false)
            .set('list', fromJS(payload.tasks));
    case taskActions.CREATE_TASK:
      return state
            .set('loading', true)
            .set('error', false);
    case taskActions.CREATE_TASK_FULFILLED: {
      console.log('payload', payload);
      const newState = state.set('list', state.get('list').push(fromJS(payload.task)));
      console.log('newState', newState);
      return newState;
      // return state
      //   .set('list', state
      //                 .get('list')
      //                 .push(fromJS(payload.task)
      //   )
      // );
    }
  }
  return state;
}

export default taskReducer;