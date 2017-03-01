import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import routes from './routes';


const routerOptions = {
  defaultRoute: 'home',
  strictQueryParams: true
};

function configureRouter(useListenersPlugin = false) {
    const router = createRouter(routes, routerOptions)
        // Plugins
        .usePlugin(loggerPlugin)
        .usePlugin(browserPlugin({
            useHash: true
        }));

    if (useListenersPlugin) {
        router.usePlugin(listenersPlugin());
    }

    return router;
}

// I can import the default module with whatever name I want (createRouter)
export default configureRouter;
