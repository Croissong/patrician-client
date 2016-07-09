import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import PatricianRoute from './Patrician';
import MapRoute from './Map';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: PatricianRoute(store),
  childRoutes: [
    MapRoute(store)
  ]
});

export default createRoutes;
