import React from 'react';
import { observer, inject} from 'mobx-react';
import styles from './Index.sass';
import { routeNode } from 'react-router5';

@inject("tabStore")
@observer
class Index extends React.Component {

  _setActiveTab() {
    const router = this.props.router;
    const route = this.props.route;
    const tabStore = this.props.tabStore;
    const { id } = route.params;
    tabStore.setActiveTab(id);
  }

  constructor(props) {
    super(props);
  }

  // Triggered when a component will be scheduled to re-render because data it observes (from mobx store) has changed.
  // This makes it easy to trace renders back to the action that caused the rendering.
  componentWillReact() {
    console.log("I will re-render, since the todo has changed!");
  }


  // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. I
  // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  // Setting state in this method will trigger a re-rendering.
  componentDidMount() {
    console.log("I did mount Index");
    this._setActiveTab();
  }

  componentWillUnmount(){
    console.log("I will unmount Index");
  }

  // This method is not called for the initial render.
  componentDidUpdate(prevProps, prevState) {
    this._setActiveTab();
    console.log("I will re-render for whatever reason");
  }

  render() {
    const tabStore = this.props.tabStore;
    return (
      <div class={styles.containerBorder}>
        <h4>Index, I am The Index Page {tabStore.activeTab}</h4>
        <p>This is some computed values: </p>
        <ul>
          <li>
            Tabs Number: {tabStore.tabNumbers}
          </li>
        </ul>
        <pre>{JSON.stringify(tabStore.tabs)}</pre>
      </div>
    );
  }
}

export default routeNode('index')(Index);
