import alt from '../alt';
import userData from './data/userData'
import UserTripsActions from '../actions/UserTripActions'

class UserTripsStore {
	constructor() {
    this.bindActions(UserTripsActions);
		this.trips = userData;
	}

  onGetTripsSuccess(data) {
    this.trips.push(data);
  }

  onGetTripsFail(err) {
    console.log('failed');
  }
}
export default alt.createStore(UserTripsStore);