import api from '../../utils/network';
import { taskActions } from './actions';

import { call, put, fork, takeLatest } from 'redux-saga/effects';


function* workerCreateTask(action) {
  console.log('action in worker', action);
  const { title } = action.payload;

  try {
    const task = yield call(
      api.post,
      '/api/tasks',
      {
        body: JSON.stringify({title})
      }
    );
    const {id, title} = task;

    yield put({ type: taskActions.CREATE_TASK_FULFILLED, payload: { id, title }});
  } catch(error) {
    yield put({ type: taskActions.CREATE_TASK_FAILED , payload: { error } })
  }
}

function* watcherCreateTask() {
  console.log('Start task saga');
  yield takeLatest(taskActions.CREATE_TASK, workerCreateTask);
}

export const taskSagas = [
  fork(watcherCreateTask)
];