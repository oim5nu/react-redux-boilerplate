import {createStore, compose, applyMiddleware} from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware, { END } from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(initialState) { 
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    sagaMiddleware,
    reactRouterMiddleware,
  ];

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    compose(applyMiddleware(...middlewares))
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}

function configureStoreDev(initialState) { 
  const reactRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    sagaMiddleware,
    reactRouterMiddleware,
    createLogger(),
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const store = createStore(
    rootReducer, 
    fromJS(initialState), 
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
