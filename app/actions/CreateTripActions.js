import alt from '../alt';

class CreateTripActions {
  constructor() {
    this.generateActions(
      'AddPointSuccess',          // pull out position, stopData
      'GetTripSuccess',           // populate create trip store 
      'CreateTripSuccess'         // clear create trip array
    );
  }

  AddPoint(array) {
    var stops = [];
    for (var i=0; i< array.length; i++) {
      var stop = {}
      var lat = array[i].position.lat();
      var lng = array[i].position.lng();
      stop.position = {lat: lat, lng: lng};
      stop.stopData = array[i].stopData;
      stops.push(stop);
    }
    this.actions.AddPointSuccess(stops);
  }

  GetTrip(trip) {
    $.get({url: '/api/trip/' + trip + '/'})
    .success((data) => {
      console.log('DATA', data);
      this.actions.GetTripSuccess(data)
    })
    .fail((err) => {
      console.log('ERROR:', err);
    })
  }

  CreateTrip(data) {
    $.post({url: '/api/trip', data})
    .success((data) => {
      this.actions.CreateTripSuccess()
    })
    .fail((err) => {
      console.log("Error:", err);
    })
  }


}

export default alt.createActions(CreateTripActions); 