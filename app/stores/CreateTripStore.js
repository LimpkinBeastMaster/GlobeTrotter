import alt from '../alt';
import userData from './data/userData'
import CreateTripActions from '../actions/CreateTripActions'

class UserTripsStore {
	constructor() {
    this.bindActions(CreateTripsActions);
		this.trips = userData;
	}

  onGetTripsSuccess(data) {
    this.trips.push(data);
  }

  onGetTripsFail(err) {
    console.log('failed');
  }
}
export default alt.createStore(CreateTripStore);