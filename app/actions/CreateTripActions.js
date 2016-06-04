import alt from '../alt';

class CreateTripActions {
  constructor() {
    this.generateActions(
      'AddPoint'
    );
  }
  // on add point
  // send whole array to store
  AddPoint(array) {
    //position, stopData
    var stops = [];
    for (var i=0; i< array.length; i++) {
      var stop = {}
      stop.position = array[i].position;
      stop.stopData = array[i].stopData;
      stops.push(stop);
    }
    this.actions.AddPointSuccess(stops);
  }
}

export default alt.createActions(CreateTripActions); 