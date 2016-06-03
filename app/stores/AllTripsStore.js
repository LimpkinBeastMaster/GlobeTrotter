import alt from '../alt';
import allData from './data/allData'
import AllTripsActions from '../actions/AllTripActions'

class AllTripsStore {
  constructor() {
    this.bindActions(AllTripsActions);
    this.trips = allData;
//    this.trips = [];
  }

  onGetTripsSuccess(data) {
    this.trips.push(data);
  }

  onGetTripsFail(err) {
    console.log('Wtf failed');
  }
}
export default alt.createStore(AllTripsStore);