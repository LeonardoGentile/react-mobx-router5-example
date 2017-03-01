import React from 'react';
import NavAccount from './NavAccount/NavAccount';
import { BaseLink, withRoute } from 'react-router5';

import styles from './Header.sass';
import logo_img from './img/home_logo.jpg'

class Header extends React.Component {

  render() {
    const { router } = this.props;

    return (
      <div className={styles.headerContainer}>
        <header className={styles.header}>

            <div className="logo">
              <BaseLink router={ router } routeName='home'>
                <img src={logo_img} alt="Logo" />
              </BaseLink>
            </div>

            <div className={styles.navAccountContainer}>
              <NavAccount  />
            </div>

            <div className={styles.socialbuttons}></div>
        </header>
      </div>
    );
  }
}

// will pass the router trough context
export default withRoute(Header);
