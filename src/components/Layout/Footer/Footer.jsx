import React from 'react';

import styles from './Footer.sass';

export default class Footer extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={styles.containerBorder}>This is the footer</footer>
    );
  }
}
