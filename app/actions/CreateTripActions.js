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
      var lat,
          lng;
      if (typeof array[i].position.lat === 'function') {
        lat = array[i].position.lat();
      } else {
        lat = array[i].position.lat;
      }
      if (typeof array[i].position.lng === 'function') {
        lng = array[i].position.lng();
      } else {
        lng = array[i].position.lng;
      }
      stop.position = {lat: lat, lng: lng};
      stop.stopData = array[i].stopData;
      stops.push(stop);
    }
    this.actions.AddPointSuccess(stops);
  }

  GetTrip(trip) {
    // console.log('/api/trip/' + trip);
    $.get({url: '/api/trip/' + trip})
    .success((data) => {
      console.log('DATA', data);
      for (var i = 0; i < data.length; i++) {
        data[i].position = JSON.parse(data[i].coordinates);
        data[i].position.lat = Number(data[i].position.lat);
        data[i].position.lng = Number(data[i].position.lng);
        data[i].stopData = {
          stopAddress: data[i].address,
          stopInfo: data[i].info,
          stopName: data[i].name
        }
        // console.log(data[i].position);
      }
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