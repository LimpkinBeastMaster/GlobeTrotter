import alt from '../alt';

class UserActions {
  constructor() {
    this.generateActions(
      'GetTripsSuccess',
      'GetTripsFail'
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
}

export default alt.createActions(UserActions); 