import alt from '../alt';
import allData from './data/allData'
import AllTripsActions from '../actions/AllTripActions'

class AllTripsStore {
  constructor() {
    this.bindActions(AllTripsActions);
    this.trips = [];
    this.searchQuery = '';
    this.stops = [];
//  this.trips = [];
  }

  onGetTripsSuccess(data) {
    this.trips = data;
  }

  onChangeLikesSuccess(obj) {
    console.log('at the success', obj.data, obj.index);
    this.trips[obj.index] = JSON.parse(obj.data);
  }

  onGetTripsFail(err) {
    console.log('Wtf failed');
  }

  onUpdateSearchQuery(event) {
    this.searchQuery = event.target.value;
  }
  onGetStopsSuccess(data) {
    this.stops = data;
  }

  // onFindCharacterSuccess(payload) {
  //   //change this to link to the tripviewpage of the specific trip
  //   payload.history.pushState(null, '/characters/' + payload.characterId);
  // } 

}
export default alt.createStore(AllTripsStore);