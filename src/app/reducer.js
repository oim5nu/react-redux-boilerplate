/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { appActions } from './actions';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
});

function appReducer(state = initialState, {type, /*payload*/}) {
  switch (type) {
    case appActions.DO_STUFF:
      return state;
        //.set('loading', true)
        //.set('error', false)
        //.setIn(['parentKey', 'nestedKey'], payload);
    default:
      return state;
  }
}

export default appReducer;