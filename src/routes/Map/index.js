import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'map',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Map = require('./containers/Map').default; 
      /* const shipReducer = require('./modules/ship').default;

       * injectReducer(store, { key: 'town', reducer: townReducer });
       * injectReducer(store, { key: 'ship', reducer: shipReducer });*/

      cb(null, Map);

      /* Webpack named bundle   */
    }, 'map');
  }
});
