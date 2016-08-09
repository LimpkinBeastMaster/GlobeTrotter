import alt from '../../alt';

class UserActions {
  constructor() {
    this.generateActions(
      'GetTripsSuccess',
      'GetTripsFail',
      'RemoveTripSuccess'
    );
  }

  GetTrips(userName) {
    $.get({url: '/api/trips/' + userName + '/'})
    .success((data) => {
      console.log('DATA', data);
      this.actions.GetTripsSuccess(data)
    })
    .fail((err) => {
      console.log('ERROR:', err);
      this.actions.GetTripsFail(err);
    })
  }

  RemoveTrip(trip, index, type) {
    $.ajax({
      type: 'POST',
      url: '/api/trips/remove',
      data: trip
    })
      .done((data) => {
        this.actions.RemoveTripSuccess({index: index});
        console.log('success', data);
      })
      .fail(() => {
        console.log('failed like request');
      });
  }
}

export default alt.createActions(UserActions); 