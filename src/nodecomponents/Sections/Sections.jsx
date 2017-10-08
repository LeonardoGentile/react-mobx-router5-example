import React from "react";
import PropTypes from 'prop-types';
import {routeNode, RouteView} from "react-mobx-router5";
import routes from "../../routes";

const routeNodeName = 'section';

class Sections extends React.Component {
  render() {
    const {route} = this.props;
    return <RouteView
      route={route}
      routes={routes}
      routeNodeName={routeNodeName}
      errorMessage={'Ooops. This is a custom error message passed to the RouteView component. The app won\'t fail in case of exception during component selection.'}
      errorStyle={{'color': 'blue'}}
    />;
  }
}


// All injected by routeNode
Sections.propTypes = {
  route: PropTypes.object, // observable
  plainRoute: PropTypes.object, // non-observable plain js obj
  routerStore: PropTypes.object
};

export default routeNode(routeNodeName)(Sections);

