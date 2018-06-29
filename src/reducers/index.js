// Set up your root reducer here...
import { combineReducers } from 'redux-immutable';
//import globalReducer from '../app/reducer';
//import homeReducer from '../views/HomePage/reducer';
import routeReducer from './routeReducer';
import demoReducer from '../containers/DemoPage/reducer';

const rootReducer = combineReducers({
  route: routeReducer,
  //global: globalReducer,
  demo: demoReducer,
});

export { default as initialState } from './initialState';
export default rootReducer;
