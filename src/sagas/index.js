import { all } from 'redux-saga/effects';
import { demoSagas } from '../containers/DemoPage/sagas';

export default function* rootSaga() {
  yield all([
    ...demoSagas,
  ]);
}