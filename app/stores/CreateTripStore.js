import alt from '../alt';
import userData from './data/userData'
import CreateTripActions from '../actions/CreateTripActions'

class CreateTripStore {
	constructor() {
    this.bindActions(CreateTripsActions);
		this.stops = [];
	}
  onAddPointSuccess(data) {
    this.stops = data;
    console.log(data);
  }
}
export default alt.createStore(CreateTripStore);