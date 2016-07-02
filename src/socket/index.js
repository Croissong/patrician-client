import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'socket',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const socketReducer = require('../../socket/actions.js').default;
      injectReducer(store, { key: 'socket', socketReducer });
    }, 'socket');
  }
});
