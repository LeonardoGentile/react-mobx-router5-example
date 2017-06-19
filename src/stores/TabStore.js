import {observable, computed, action} from 'mobx';

// A Mobx Store
class TabStore {

  // Observable properties
  @observable activeTab = null;
  @observable tabs = [];

  @computed get tabNumbers() {
    return this.tabs.length;
  }

  // Helper methods
  _addTab = (id) => {

    const found = this.tabs.find(function(item, index, array) {
      return item.id === id
    });

    // Add element if not already in the array
    if (!found) {
      this.tabs.push({
        id: id,
      });
    }
  };

  // Actions
  @action setActiveTab = (id) => {
    this._addTab(id);
    this.activeTab = id;
  };

}

const tabStore = new TabStore();
export default tabStore;
