//!steal-remove-start
import { debug } from 'can';
debug();
//!steal-remove-end

import { DefineMap, route, RoutePushstate, value } from 'can';

route.urlData = new RoutePushstate();
route.register('{page}', { page: 'home' });

const AppViewModel = DefineMap.extend('App', {
  routeData: {
    default: () => route.data,
  },
  title: {
    default: 'can-import-error',
  },
  pagePromise: {
    default: undefined,
  },
});

export default AppViewModel;
