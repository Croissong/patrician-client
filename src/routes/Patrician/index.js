import { injectReducer } from '../../store/reducers';

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PatricianView = require('./containers/PatricianViewContainer').default;
      const townReducer = require('./modules/town').default;
      const shipReducer = require('./modules/ship').default;

      injectReducer(store, { key: 'town', reducer: townReducer });
      injectReducer(store, { key: 'ship', reducer: shipReducer });

      cb(null, PatricianView);

      /* Webpack named bundle   */
    }, 'patrician');
  }
});
