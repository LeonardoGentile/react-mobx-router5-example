import React from 'react';
import styles from './Home.sass';
import { routeNode } from 'react-router5';

class Home extends React.Component {
  render() {
    return (
        <div className={styles.containerBorder}>
          <h4>Home, I am a subroute page</h4>
          <button className="button loading">Hello</button>
        </div>
    );
  }
}


export default routeNode('home')(Home);
