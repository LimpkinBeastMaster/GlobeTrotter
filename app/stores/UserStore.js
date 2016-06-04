import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.trips = [];
    this.user = 'ben';
  }
  onGetTripsSuccess(data) {
  	this.trips = data;
    this.emitChange();
  }
  onGetTripsFail(err) {
  	this.trips = [];
  }
}

export default alt.createStore(UserStore);