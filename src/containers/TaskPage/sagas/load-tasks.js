import { put, call, takeLatest } from 'redux-saga/effects';
import api from '../../../utils/network';
import { taskActions } from '../actions';
//============================================================
// Load Tasks
//------------------------------------------------------------

function *loadTasksSaga(action) {
  console.log('loadTasksSaga action', action);
  try {
    const { data } = yield call(
      api.get,
      '/api/tasks'
    );

    console.info('data', data);
    yield put({ type: taskActions.LOAD_TASKS_FULFILLED, payload: { tasks: data }});
  } catch (error) {
    yield put({ type: taskActions.LOAD_TASKS_FAILED, payload: { error }})
  }
}

export default function *watchLoadTasksSaga() {
  yield takeLatest(taskActions.LOAD_TASKS, loadTasksSaga);
}