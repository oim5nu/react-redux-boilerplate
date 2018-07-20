import { LOCATION_CHANGE } from 'react-router-redux';
import { take, put } from 'redux-saga/effects';
import { taskActions } from '../actions';

export default function* watchFilterTasksSaga() {
  // eslint-disable-next-line no-constant-condition 
  while (true) {
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/todo') {
      const params = new URLSearchParams(payload.search);
      const filter = params.get('filter');
      //console.log('filter', filter);
      yield put(taskActions.filterTasks(filter));
    }
  }
}