import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.trips = [];
    this.user = 'fred';
  }
  onGetTripsSuccess(data) {
  	this.trips = data;
  }
  onGetTripsFail(err) {
  	this.trips = [];
  }
}

export default alt.createStore(UserStore);