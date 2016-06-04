import alt from '../alt';

class AllTripsActions {
  constructor() {
    this.generateActions(
      'GetTripsSuccess',
      'GetTripsFail',
      'updateSearchQuery',
      'ChangeLikesSuccess'
      //'FindTripSuccess',
      //'FindTripFail'
    );
  }

  GetTrips() {
    $.ajax({url: '/api/trips'})
    .done((data) => {
      //console.log('DATA', data);
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