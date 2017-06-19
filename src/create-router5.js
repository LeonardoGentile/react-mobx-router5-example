import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import browserPlugin from 'router5/plugins/browser';
import {mobxPlugin} from 'mobx-router5';

import routes from './routes';
import routerStore from './stores/RouterStore';

const routerOptions = {
  defaultRoute: 'home',
  strictQueryParams: true
};

// I can import the default module with whatever name I want (ex. `createRouter`)
export default function configureRouter() {
  const router = createRouter(routes, routerOptions)
    // Plugins
    .usePlugin(browserPlugin({useHash: true}))
    .usePlugin(mobxPlugin(routerStore))
    .usePlugin(loggerPlugin);

  return router;
}



