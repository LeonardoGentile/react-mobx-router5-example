import React from "react";
import { inject, observer } from "mobx-react";
import { BaseLink, Link, NavLink } from "react-mobx-router5";
import * as styles from "./NavMenu.sass";
import {} from 'react-mobx-router5';

function LoggedInMenu(props) {
  const links = [
    { routeName: 'index',
      routeParams: {id: 1},
      linkName: 'index'
    },
    { routeName: 'section.home',
      routeParams: {},
      linkName: 'Section/Home'
    },
    { routeName: 'section.subsection.home',
      routeParams: {},
      linkName: 'Section/SubSection/home'
    },
    { routeName: 'section.subsection.login',
      routeParams: {},
      linkName: 'login/logout'
    }
  ];

  const Navs = links.map((item, index) => {
    return (
      <NavLink
        key={index}
        routeName={item.routeName}
        routeParams={item.routeParams}>
          {item.linkName}
      </NavLink>);
  });

  return (
    <ul className={styles.nav}>
      { Navs }
    </ul>
  );
}


function LoggedOutMenu(props) {
  return (
    <ul className={styles.nav}>
      <NavLink routeName="login" linkClassName="class-for-login-link">
        login
      </NavLink>
    </ul>
  );
}


@inject('routerStore', 'userStore')
@observer
class NavMenu extends React.Component {

  constructor(props) {
    super(props);
    this._showLogin = this._showLogin.bind(this);
  }

  _showLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("hello");
  }

  render() {

    const isLoggedIn = this.props.userStore.isLoggedIn;
    return (
      isLoggedIn ? <LoggedInMenu /> : <LoggedOutMenu/>);
  }
}

export default NavMenu;
