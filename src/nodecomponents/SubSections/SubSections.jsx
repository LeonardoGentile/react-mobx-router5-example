import React from "react";
import PropTypes from 'prop-types';
import {routeNode, RouteView} from "react-mobx-router5";
import routes from "../../routes";

const routeNodeName = 'section.subsection';

class SubSections extends React.Component {
  render() {
    const {activeRoute} = this.props;
    return <RouteView route={activeRoute} routes={routes} routeNodeName={routeNodeName} />;
  }
}

// Both injected by routeNode
SubSections.propTypes = {
  activeRoute: PropTypes.object.isRequired,
  routerStore: PropTypes.object.isRequired
};

export default routeNode(routeNodeName)(SubSections);



