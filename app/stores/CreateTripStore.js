import alt from '../alt';
import userData from './data/userData'
import CreateTripActions from '../actions/CreateTripActions'

class CreateTripStore {
	constructor() {
    this.bindActions(CreateTripActions);
		this.stops = [];
	}
  onAddPointSuccess(data) {
    this.stops = data;
    console.log(data);
  }
  onGetTripSuccess(data) {
    this.stops = data;
  }
  onCreateTripSuccess() {
    this.stops = [];
  }
}
export default alt.createStore(CreateTripStore);