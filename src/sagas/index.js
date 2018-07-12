import { all } from 'redux-saga/effects';
import { demoSagas } from '../containers/DemoPage/sagas';
import { taskSagas } from '../containers/TaskPage/sagas';

export default function* rootSaga() {
  yield all([
    ...demoSagas,
    ...taskSagas,
  ]);
}