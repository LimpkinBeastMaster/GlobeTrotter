import alt from '../alt';
import HomeActions from '../actions/UserActions';

class HomeStore {
  constructor() {
    this.bindActions(UserActions);
  }
}

export default alt.createStore(UserStore);