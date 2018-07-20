import api from '../../../utils/network';
import { taskActions } from '../actions';
import { call, put, takeLatest } from 'redux-saga/effects';

function* updateTaskSaga(action) {
  const { task, changes } = action.payload;

  try {
    const taskUpdated = yield call(
      api.patch,
      `/api/tasks/${task.id}`,
      { ...changes }
    );
  
    const { id, title, completed } = taskUpdated.data;
    yield put({
      type: taskActions.UPDATE_TASK_FULFILLED, 
      payload: { id, title, completed }
    });
    yield put({
      type: taskActions.LOAD_TASKS
    });

  } catch(error) {
    yield put({type: taskActions.UPDATE_TASK_FAILED, payload: { error }});
  } finally {
    yield put({
      type: taskActions.LOAD_TASKS
    });
  }
}

export default function* watchUpdateTaskSaga() {
  yield takeLatest(taskActions.UPDATE_TASK, updateTaskSaga);
}