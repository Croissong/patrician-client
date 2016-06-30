import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import PatricianRoute from './Patrician';
import Home from './Home';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: PatricianRoute(store) 
});

export default createRoutes;
