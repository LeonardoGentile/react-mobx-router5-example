import React from 'react';
import {fakeLogin, fakeLogout} from '../../actions/auth'
import {observer, inject} from 'mobx-react';
import styles from './Login.sass'

// 'inject' can be used to pick up the stores passed to components with Provider.
// It is a higher order component that takes a list of strings and makes those stores available as 'this.props.storeName' to the wrapped component.
@inject('userStore')
@observer
class Login extends React.Component {

  // To validate the injected store
  static propTypes = {
    userStore: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    // BINDING
    this.onSubmit = this.onSubmit.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  //  ==================
  //  = Event Handlers =
  //  ==================

  onSubmit(event) {
    event.preventDefault();
    fakeLogin();
  }

  onLogout(e) {
    e.preventDefault();
    fakeLogout();
  }

  render() {
    return (
      <div className={styles.container}>
        <p>{JSON.stringify(this.props.userStore.user)}</p>
        <br/>
        <p>Click on login/logout and nav menu will change</p>
        <button
          type="button"
          onClick={this.onSubmit}
        >Login
        </button>
        <button
          type="button"
          onClick={this.onLogout}
        >Logout
        </button>
      </div>
    );
  }
}

export default Login;
