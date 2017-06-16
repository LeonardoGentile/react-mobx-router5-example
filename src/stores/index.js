import tabStore from './TabStore';
import userStore from './UserStore';
import routerStore from './RouterStore';

const stores = {
  userStore,
  tabStore,
  routerStore
};

window.__STORES__ = stores; // For Debug

export {
  userStore,
  tabStore,
  routerStore
};
