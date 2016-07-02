import router from './routerReducer.js';
import { combineReducers } from 'redux-immutable';

export const makeRootReducer = (asyncReducers) => {
  let reducers = {
    // Add sync reducers here
    router: router,
    ...asyncReducers
  };
  return combineReducers(reducers);
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
