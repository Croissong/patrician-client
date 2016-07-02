import { injectReducer } from '../store/reducers';

export default (store) => ({
  path: 'socket',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const socketReducer = require('./actions').default;
      injectReducer(store, { key: 'socket', socketReducer });
    }, 'socket');
  }
});
