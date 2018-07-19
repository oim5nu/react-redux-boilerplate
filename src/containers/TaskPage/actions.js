export const taskActions = {
  LOAD_TASKS: 'TaskPage/LOAD_TASKS',
  LOAD_TASKS_FAILED: 'TaskPage/LOAD_TASKS_FAILED',
  LOAD_TASKS_FULFILLED: 'TaskPage/LOAD_TASKS_FULFILLED',
  CREATE_TASK: 'TaskPage/CREATE_TASK',
  CREATE_TASK_FAILED: 'TaskPage/CREATE_TASK_FAILED',
  CREATE_TASK_FULFILLED: 'TaskPage/CREATE_TASK_FULFILLED',
  UPDATE_TASK: 'TaskPage/UPDATE_TASK',
  UPDATE_TASK_FAILED: 'TaskPage/UPDATE_TASK_FAILED',
  UPDATE_TASK_FULFILLED: 'TaskPage/UPDATE_TASK_FULFILLED',
  REMOVE_TASK: 'TaskPage/REMOVE_TASK',
  REMOVE_TASK_FAILED: 'TaskPage/REMOVE_TASK_FAILED',
  REMOVE_TASK_FULFILLED: 'TaskPage/REMOVE_TASK_FULFILLED',

  createTask: title => ({
    type: taskActions.CREATE_TASK,
    payload: {task: {title, completed: false}}
  }),

  createTaskFailed: error => ({
    type: taskActions.CREATE_TASK_FAILED,
    payload: {error}
  }),

  createTaskFulfilled: task => ({
    type: taskActions.LOAD_TASKS_FULFILLED,
    payload: {task}
  }),

  loadTasks: () => ({
    type: taskActions.LOAD_TASKS,
    payload: false
  }),

  loadTasksFailed: error => ({
    type: taskActions.LOAD_TASKS_FAILED,
    payload: {error}
  }),

  loadTasksFulfilled: tasks => ({
    type: taskActions.LOAD_TASKS_FULFILLED,
    payload: {tasks}
  }),

  updateTask: (task, changes) => ({
    type: taskActions.UPDATE_TASK,
    payload: {task, changes}
  }),

  updateTaskFulfilled: task => ({
    type: taskActions.UPDATE_TASK_FULFILLED,
    payload: {task}
  }),

  updateTaskFailed: error => ({
    type: taskActions.UPDATE_TASK_FAILED,
    payload: {error}
  }),
  removeTask: (task) => ({
    type: taskActions.REMOVE_TASK,
    payload: {task}
  }),

  removeTaskFulfilled: task => ({
    type: taskActions.REMOVE_TASK_FULFILLED,
    payload: {task}
  }),

  removeTaskFailed: error => ({
    type: taskActions.REMOVE_TASK_FAILED,
    payload: {error}
  }),
}