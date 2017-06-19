import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import styles from './Index.sass';

@inject("tabStore")
@observer
class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  _setActiveTab() {
    const tabStore = this.props.tabStore;
    const {id} = this.props.route.params;
    tabStore.setActiveTab(id);
  }

  // Triggered when a component will be scheduled to re-render because data it observes has changed (because @observer)
  // This makes it easy to trace renders back to the action that caused the rendering.
  componentWillReact() {
    console.debug("I will re-render, since the todo has changed!");
  }

  // componentDidMount() is invoked immediately after a component is mounted.
  // Initialization that requires DOM nodes should go here.
  // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  // Setting state in this method will trigger a re-rendering.
  componentDidMount() {
    this._setActiveTab();
  }

  componentWillUnmount() {
  }

  // This method is not called for the initial render.
  componentDidUpdate(prevProps, prevState) {
    this._setActiveTab();
    console.debug("I will re-render the Index Component for whatever reason");
  }

  render() {
    const tabStore = this.props.tabStore;
    return (
      <div className={styles.containerBorder}>
        <h4>I am The Index Page</h4>
        <br/>
        <p>tabStore.activeTab: {tabStore.activeTab}</p>
        <p>Tabs Number (computed tabStore.tabNumbers): {tabStore.tabNumbers}</p>
        <br/>
        <h4>(tabStore.tabs): </h4>
        <pre>{JSON.stringify(tabStore.tabs)}</pre>
      </div>
    );
  }
}

Index.PropTypes = {
  tabStore: PropTypes.object, // injected
  route: PropTypes.object // injected by RouteView (non-observable)
};

export default Index;
