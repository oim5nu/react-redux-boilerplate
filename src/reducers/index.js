// Set up your root reducer here...
// We dont use combineReducers from redux here simply because
//  
import { combineReducers } from 'redux-immutable';
import globalReducer from '../app/reducer';
//import homeReducer from '../views/HomePage/reducer';
import routeReducer from './routeReducer';
import demoReducer from '../containers/DemoPage/reducer';
import taskReducer from '../containers/TaskPage/reducer';

const rootReducer = combineReducers({
  route: routeReducer,
  global: globalReducer,
  demo: demoReducer,
  tasks: taskReducer,
});

export { default as initialState } from './initialState';
export default rootReducer;
