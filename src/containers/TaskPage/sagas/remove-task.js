import api from '../../../utils/network';
import { taskActions } from '../actions';
import { call, put, takeLatest } from 'redux-saga/effects';

function* removeTaskSaga(action) {
  const { task } = action.payload;

  try {
    const taskRemoved = yield call(
      api.delete,
      `/api/tasks/${task.id}`,
    );
  
    const { id } = taskRemoved.data;
    yield put({
      type: taskActions.REMOVE_TASK_FULFILLED, 
      payload: { id }
    });
    yield put({
      type: taskActions.LOAD_TASKS
    });
  } catch(error) {
    yield put({type: taskActions.REMOVE_TASK_FAILED, payload: { error }});
  } finally {
    yield put({
      type: taskActions.LOAD_TASKS
    });    
  }
}

export default function* watchRemoveTaskSaga() {
  yield takeLatest(taskActions.REMOVE_TASK, removeTaskSaga);
}