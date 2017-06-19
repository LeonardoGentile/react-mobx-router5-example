import React from "react";
import PropTypes from 'prop-types';
import {routeNode, RouteView} from "react-mobx-router5";
import routes from "../../routes";

const routeNodeName = 'section';

class Sections extends React.Component {
  render() {
    const {route} = this.props;
    return <RouteView route={route} routes={routes} routeNodeName={routeNodeName} />;
  }
}


// All injected by routeNode
Sections.propTypes = {
  route: PropTypes.object, // observable
  plainRoute: PropTypes.object, // non-observable plain js obj
  routerStore: PropTypes.object
};

export default routeNode(routeNodeName)(Sections);

