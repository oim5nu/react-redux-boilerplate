import api from '../../../utils/network';
import { taskActions } from '../actions';

import { call, put, takeLatest } from 'redux-saga/effects';

//==================================================
// Create
//--------------------------------------------------
export function* createTaskSaga(action) {
  const { task } = action.payload;

  try {
    const taskCreated = yield call(
      api.post,
      '/api/tasks',
      // axios only need to pass object straightaway rather than { body: ... } with fetch
      {title: task.title} 
    );
    const {id, title} = taskCreated.data;

    yield put({ type: taskActions.CREATE_TASK_FULFILLED, payload: { task: { id, title } } });
  } catch(error) {
    yield put({ type: taskActions.CREATE_TASK_FAILED , payload: { error } })
  }
}

export default function* watchCreateTaskSaga() {
  yield takeLatest(taskActions.CREATE_TASK, createTaskSaga);
}




