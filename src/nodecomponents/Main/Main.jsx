import React from "react";
import PropTypes from 'prop-types';
import {routeNode, RouteView} from "react-mobx-router5";
import routes from "../../routes";

const routeNodeName = ''; // '' because root node

class Main extends React.Component {
  render() {
    const {activeRoute} = this.props;
    // This will inject 'route' to the selected child component
    return <RouteView route={activeRoute} routes={routes} routeNodeName={routeNodeName} />;
  }
}

// Both injected by routeNode
Main.propTypes = {
  activeRoute: PropTypes.object, // non-observable. plain js obj
  routerStore: PropTypes.object
};

// HOC to wrap a route node components
export default routeNode(routeNodeName)(Main);
