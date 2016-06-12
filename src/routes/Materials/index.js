import { injectReducer } from '../../store/reducers';
import Materials from './containers/MaterialsContainer';
import reducer from'./modules/materials';

export default (store) => ({
  path: 'materials',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */ 
      
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'materials', reducer });

      /*  Return getComponent   */
      cb(null, Materials);

      /* Webpack named bundle   */
    }, 'materials');
  }
});
