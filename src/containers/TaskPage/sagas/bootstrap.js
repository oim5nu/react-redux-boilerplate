import { put } from 'redux-saga/effects';
import { taskActions } from '../actions';

export default function* bootstrap() {
  yield put(taskActions.loadTasks());
}