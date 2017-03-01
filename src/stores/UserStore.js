import { observable, action, computed } from 'mobx';

// TODO:
function _handleErrors(response) {
  if (response.data && response.data.success !== true) {
    throw Error(response);
  }
  return response;
}


class UserStore {

  constructor() {
    this.user = this.defaultUser;
    this.watchlist = [];
  }


  defaultUser = {
    "level" : "V",
    "status" : "U"
  };

  //  ===============
  //  = OBSERVABLES =
  //  ===============
  @observable user;
  @observable watchlist;

  //  ============
  //  = COMPUTED =
  //  ============
  @computed get isLoggedIn() {
    return this.user.level !== 'V';
  }

  //  ===========
  //  = Actions =
  //  ===========
  @action setUser = (user) => {
    this.user = user;
  };

  @action resetUser = () => {
    this.user = this.defaultUser;
    this.watchlist = [];
  };

}


const userStore = new UserStore();

export default userStore;

export { UserStore };
