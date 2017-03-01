import React from 'react';
import {login, logout} from '../actions/auth'
import { observer, inject } from 'mobx-react';
import { routeNode } from 'react-router5';

// 'inject' can be used to pick up the stores passed to components with Provider.
// It is a HOC that takes a list of strings and makes those stores available as 'this.props.storeName' to the wrapped component.
@inject('userStore')
@observer
class Login extends React.Component {

  // To validate the injected store
  static propTypes = {
    userStore: React.PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.formData = {email:"", password:""};
    // BINDING
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount(){
    console.log("I did mount the login");
  }

  componentWillUnmount(){
    console.log("I will unmount the login");
  }

  onEmailChange(e) {
    Object.assign(this.formData, {}, {email: e.target.value});
    console.log(this.formData);
  }

  onPasswordChange(e) {
    Object.assign(this.formData, {}, {password: e.target.value});
    console.log(this.formData);
  }

  onSubmit(event) {
    event.preventDefault();
    login(this.formData);
  }

  onLogout(e) {
    event.preventDefault();
    logout();
  }

  render() {
    return (
      <div className="container">
        <p>{JSON.stringify(this.props.userStore.user)}</p>
        <div >
          <h3>Login</h3>
          <hr />
        </div>
        <form role="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              ref="email"
              placeholder="Email"
              onChange={this.onEmailChange}
            /> <br/>
            <input
              type="password"
              name="password"
              ref="password"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </div>
          <button
            type="submit"
            value="Submit"
            action=""
            >Submit</button>
        </form>

        <button
          type="button"
          onClick={this.onLogout} > Logout </button>
      </div>
    );
  }
}

export default routeNode('login')(Login);
