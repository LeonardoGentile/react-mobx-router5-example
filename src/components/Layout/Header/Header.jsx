import React from 'react';
import PropTypes from 'prop-types';
import {inject} from 'mobx-react';
import {Link} from "react-mobx-router5";

import NavMenu from './NavMenu/NavMenu';
import * as styles from './Header.sass';

@inject('routerStore')
class Header extends React.Component {

  render() {
    const routerStore = this.props.routerStore;
    return (
      <header className={styles.header}>

        <Link
          routeName={'home'}
          routerStore={routerStore}
          className={styles.homeLink}> Home </Link>

        <div className={styles.navContainer}>
          <NavMenu />
        </div>

        <div className={styles.explanationHome}>
          <p>^ This is a Link Component => It will apply automatically an active class on the `a` element</p>
        </div>

        <div className={styles.explanationNav}>
          <p> These are NavLink Components => The `active` class will be applied to the 'li' wrappers ^</p>
        </div>

        <br/>

      </header>
    );
  }
}

Header.propTypes = {
  routerStore: PropTypes.object // injected
};

// will passe the router trough context
export default Header;

