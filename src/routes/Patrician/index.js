import { injectReducer } from '../../store/reducers';


export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  path: "a",
  getComponent (nextState, cb) {
    path: 'sax',
    require.ensure([], (require) => {

      const PatricianView = require('./containers/PatricianViewContainer').default
      const townReducer = require('./modules/town').default
      const shipReducer = require('./modules/ship').default 
      
      injectReducer(store, { key: 'town', reducer: townReducer });
      injectReducer(store, { key: 'ship', reducer: shipReducer });

      cb(null, PatricianView);

      /* Webpack named bundle   */
    }, 'patrician');
  }
});
