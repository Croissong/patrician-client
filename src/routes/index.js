import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import PatricianRoute from './Patrician';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: PatricianRoute(store)
});

export default createRoutes;
