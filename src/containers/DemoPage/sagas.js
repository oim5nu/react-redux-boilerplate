import { put, takeEvery, fork } from 'redux-saga/effects';
import { delay } from '../../utils/misc';
// import { increment } from './actions';
import { INCREMENT, INCREMENT_ASYNC } from './constants/actionTypes';

//===============================
// WORKERS
//-------------------------------

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: INCREMENT });
}

//===============================
// WATCHERS
//-------------------------------
function *watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export const demoSagas = [
  fork(watchIncrementAsync),
];

