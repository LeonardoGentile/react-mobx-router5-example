import React from 'react';
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import { withRoute } from 'react-router5';

import styles from './NavAccount.sass';

@inject("userStore")
@observer
class NavAccount extends React.Component {

  constructor(props, context){
    super(props, context);
    // this should work
    // this.router = context.router;
    this._showLogin = this._showLogin.bind(this);
  }

  componentWillUnmount() {
    console.log("Hello, I am the NavAccount, I will unmount")
  }

  //  ===========
  //  = Helpers =
  //  ===========
  _showLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    this.props.router.navigate('login', (err, state)=>  {
      if (err) console.log(err);
      else console.log("I navigate to: " + state.name);
    });
  }

  _renderMenu() {
    const userStore = this.props.userStore;

    const isLoggedIn = userStore.isLoggedIn;
    const ulClass = classNames(styles.navAccount, 'horizontal');

    if (isLoggedIn){
      return (
        <ul className={ulClass}>
          <li className="logout last">
            <a href="#">Logout</a>
          </li>
        </ul>
      );
    }
    else {
      return (
        <ul className={ulClass}>
          <li className={styles.signIn}>
            <a href="#" onClick={this._showLogin}>Sign In</a>
          </li>
        </ul>
      );
    }

  }

  render() {
    return (this._renderMenu())
  }

}

export default withRoute(NavAccount);
