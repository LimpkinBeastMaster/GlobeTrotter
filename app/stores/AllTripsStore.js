import alt from '../alt';
import allData from './data/allData';

class AllTripsStore {
	constructor() {
		this.trips = allData;
	}
}

export default alt.createStore(AllTripsStore);