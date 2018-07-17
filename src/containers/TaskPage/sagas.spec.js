/* To Be Improved */
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { createTaskSaga } from './sagas';
import api from '../../utils/network';
import { taskActions } from './actions';

describe('Working with createTaskSaga', () => {
  it('should dispatch CREATE_TASK_FULFILLED action when adding new task is successful', () => {
    let response = { data: {
      status: "success"
    }},
    task = {
      title: "This is a test",
      completed: false
    },
    action = {
      payload: { task },
      type: taskActions.CREATE_TASK,
      successCallback: jest.fn()
    };

    expectSaga(createTaskSaga, action) 
      .provide([
        [matchers.call.fn(api.post), response]
      ])
      .put({ type: taskActions.CREATE_TASK_FULFILLED, payload: { task } })
      .run();
  });

});