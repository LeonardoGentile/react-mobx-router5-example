import React from "react";
import PropTypes from 'prop-types';
import {inject, observer} from "mobx-react";
import {NavLink} from "react-mobx-router5";
import * as styles from "./NavMenu.sass";
import {} from 'react-mobx-router5';

const links = [
  {
    routeName: 'index',
    routeParams: {id: 1},
    linkName: 'index'
  },
  {
    routeName: 'section.home',
    routeParams: {},
    linkName: 'Section/Home'
  },
  {
    routeName: 'section.subsection.home',
    routeParams: {},
    linkName: 'Section/SubSection/home'
  },
  {
    routeName: 'section.subsection.login',
    routeParams: {},
    linkName: 'login/logout'
  }
];

const NavLinks = links.map((item, index) => {
  return (
    <NavLink
      key={index}
      routeName={item.routeName}
      routeParams={item.routeParams}>
      {item.linkName}
    </NavLink>);
});



function LoggedInMenu(props) {
  return (
    <ul className={styles.navMenu}>
      { NavLinks }
    </ul>
  );
}

function LoggedOutMenu(props) {
  return (
    <ul className={styles.navMenu}>
      <NavLink routeName="login" linkClassName="class-for-login-link">
        login
      </NavLink>
    </ul>
  );
}


@inject('userStore')
@observer
class NavMenu extends React.Component {

  render() {
    const isLoggedIn = this.props.userStore.isLoggedIn;
    return (
      isLoggedIn ? <LoggedInMenu /> : <LoggedOutMenu/>);
  }
}

NavMenu.propTypes = {
  userStore: PropTypes.object // injected
};

export default NavMenu;
