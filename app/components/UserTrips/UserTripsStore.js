import alt from '../../alt';
import UserTripsActions from './UserTripsActions';

class UserStore {
  constructor() {
    this.bindActions(UserTripsActions);
    this.trips = [];
    this.user = 'ben';
  }
  onGetTripsSuccess(data) {
  	this.trips = data;
    this.emitChange();
    //console.log(this.trips);
  }
  onGetTripsFail(err) {
    this.trips = [];
  }

  onRemoveTripSuccess(obj) {
    console.log('REVMOETRIPSUCCESS', obj.index);
    //this.trips[obj.index] = JSON.parse(obj.data);
    this.trips.splice(obj.index, 1);
  }
}

export default alt.createStore(UserStore);