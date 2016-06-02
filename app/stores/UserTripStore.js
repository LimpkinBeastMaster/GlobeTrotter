import alt from '../alt';
import userData from './data/userData'

class UserTripsStore {
	constructor() {
		this.trips = userData;
	}
}
export default alt.createStore(UserTripsStore);