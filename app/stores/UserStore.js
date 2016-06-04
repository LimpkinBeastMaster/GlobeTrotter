import alt from '../alt';
import HomeActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.trips = [];
  }
  onGetTripsSuccess(data) {
  	this.trips = data;
  }
  onGetTripsFail(err) {
  	this.trips = [];
  }
}

export default alt.createStore(UserStore);