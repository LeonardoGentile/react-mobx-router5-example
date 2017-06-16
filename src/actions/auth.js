import axios from 'axios';
import querystring  from 'querystring';
import userStore from  '../stores/UserStore'

// TODO:
function _handleErrors(response) {
  if (response.data && response.data.success !== true) {
    throw Error(response);
  }
  return response;
}

export function login(formData, callback = undefined) {
  axios({
    method: 'post',
    url: '/login',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify(formData)
  })
    .then(_handleErrors)
    .then((response) => {
      console.log(response);
      userStore.setUser(response.data.data);
    })
    .catch((error) => {
      // optional callback
      typeof callback === "function" && callback(error);
      // TODO: _handleErrors(error, callback)
      console.log(error);
    });
}

export function logout() {
  axios.get("/logout")
    .then((res) => {
      // or setUser(res.data.data) basically the same
      userStore.resetUser();
    })
}

export function fakeLogin() {
  const user = {
    "level": "M",
    "status": "A",
    "name": "Leo",
    "job": "Buttons Pusher"
  };
  userStore.setUser(user);
}

export function fakeLogout() {
  userStore.resetUser();
}
