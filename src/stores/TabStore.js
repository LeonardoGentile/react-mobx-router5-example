import { observable, computed, autorun, action } from 'mobx';

// Mobx Observable Store
class TabStore {

  constructor() {
    // Autorun runs every time the store changes
    // In reality what I want is to run a react .render() whenever something changes
    autorun(() => console.log("Active Tab: " + this.activeTab));
  }

  @observable activeTab = null;
  @observable tabs = [];

  @computed get tabNumbers() {
    return this.tabs.length;
  }


  //  ===========
  //  = Methods =
  //  ===========
  _addTab = (id) => {

    const found = this.tabs.find(function(item, index, array) {
      return item.id === id
    });
    if (!found) {
      this.tabs.push({
        id: id,
      });
    }
    else {
      console.log("Element already in array");
    }
  };

  @action setActiveTab = (id) => {
    this.activeTab = id;
    this._addTab(id);
  };


}


const tabStore = new TabStore();
export default tabStore;
