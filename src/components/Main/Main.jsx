import React, { createElement } from 'react';
import { routeNode } from 'react-router5';

import Home from '../../pages/Home';
import Index from '../../pages/Index';
import Login from '../../pages/Login';


const components = {
    'home':   Home,
    'index':  Index,
    'login':  Login,
};

class Main extends React.Component {

  render(){
    const { route } = this.props;
    const segment = route.name.split('.')[0];

    return createElement(components[segment],
      { ...route.params }
      // For full unmount/mount pass the key as below:
      // { key: route.meta.id, ...route.params }
    );
  }
}
// withRouter is a High Order Function
// It is a sort of decorator to augment the Component class with extra methods or properties coming from react-router
// For example we can now access "this.props.router" (we need listenersPlugin from router5)
export default routeNode('')(Main); // '' because it it the root node
