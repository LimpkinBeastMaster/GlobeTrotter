import alt from '../alt';

class AllTripsActions {
  constructor() {
    this.generateActions(
      'GetTripsSuccess',
      'GetTripsFail',
      'updateSearchQuery',
      'ChangeLikesSuccess',
      'GetStopsSuccess'
      //'FindTripSuccess',
      //'FindTripFail'
    );
  }

  GetTrips() {
    $.get({url: '/api/trips'})
    .success((data) => {
      console.log('DATA', data);
      this.actions.GetTripsSuccess(data)
    })
    .fail((err) => {
      console.log('ERROR:', err);
      this.actions.GetTripsFail(err);
    })
  }


  ChangeLikes(trip, index, type) {
    $.ajax({
      type: 'PUT',
      url: '/api/trips/likes',
      data: {'trip': trip, 'type': type}
    })
      .done((data) => {
        this.actions.ChangeLikesSuccess({data: data, index: index});
        console.log('success', data);
      })
      .fail(() => {
        console.log('failed like request');
      });
  }

  GetStops() {
    $.get({url: '/api/stops'})
    .success((data) => {
      for (var i = 0; i < data.length; i++) {
        var position = JSON.parse(data[i].coordinates);
        var lat = Number(position.lat);
        var lng = Number(position.lng);
        data[i] = [lng, lat];
      }
      this.actions.GetStopsSuccess(data)
    })
    .fail((err) => {
      console.log('ERROR:', err);
    })
  }




  // findTrip(payload) {
  //   $.ajax({
  //     url: '/api/trips/search',
  //     data: { name: payload.searchQuery }
  //   })
  //     .done((data) => {
  //       assign(payload, data);
  //       this.actions.findCharacterSuccess(payload);
  //     })
  //     .fail(() => {
  //       this.actions.findCharacterFail(payload);
  //     });
  // }

}

export default alt.createActions(AllTripsActions); 