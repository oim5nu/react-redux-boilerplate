import api from '../../utils/network';
import { taskActions } from './actions';

import { call, put, fork, takeLatest } from 'redux-saga/effects';


function* workerCreateTask(action) {
  const { task } = action.payload;
  console.log('task in worker', task);  

  try {
    const taskCreated = yield call(
      api.post,
      '/api/tasks',
      // axios only need to pass object straightaway rather than { body: ... } with fetch
      {title: task.title} 
    );
    console.log('taskCreated', taskCreated);
    const {id, title} = taskCreated.data;

    yield put({ type: taskActions.CREATE_TASK_FULFILLED, payload: { task: { id, title } } });
  } catch(error) {
    yield put({ type: taskActions.CREATE_TASK_FAILED , payload: { error } })
  }
}

function* watcherCreateTask() {
  yield takeLatest(taskActions.CREATE_TASK, workerCreateTask);
}

export const taskSagas = [
  fork(watcherCreateTask)
];