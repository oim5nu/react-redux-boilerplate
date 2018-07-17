import { fork } from 'redux-saga/effects';
import watchCreateTaskSaga from './create-task';
import watchLoadTasksSaga from './load-tasks';
import bootstrap from './bootstrap';

export const taskSagas = [
  fork(watchCreateTaskSaga),
  fork(watchLoadTasksSaga),
  fork(bootstrap),
];