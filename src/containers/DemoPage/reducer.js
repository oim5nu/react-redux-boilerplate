import { fromJS } from 'immutable';
import * as types from './constants/actionTypes';

const initialState = fromJS({
  counter: 0
});

function demoReducer(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT: {
      let newValue = state.get('counter') + 1;
      return state.set('counter', newValue); 
    }
    case types.DECREMENT: {
      let newValue = state.get('counter') - 1;
      return state.set('counter', newValue); 
    }    
    default: 
      return state;  
  }
}

export default demoReducer; 