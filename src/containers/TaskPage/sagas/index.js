import { fork } from 'redux-saga/effects';
import watchCreateTaskSaga from './create-task';
import watchLoadTasksSaga from './load-tasks';
import watchUpdateTaskSaga from './update-task';
import watchRemoveTaskSaga from './remove-task';
import watchFilterTasksSaga from './filter-tasks';
import bootstrap from './bootstrap';

export const taskSagas = [
  fork(watchFilterTasksSaga),
  fork(watchRemoveTaskSaga),
  fork(watchUpdateTaskSaga),
  fork(watchCreateTaskSaga),
  fork(watchLoadTasksSaga),
  fork(bootstrap),
];