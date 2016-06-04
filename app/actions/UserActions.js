import alt from '../alt';

class UserTripsActions {
  constructor() {
    this.generateActions(
      'GetTripsSuccess',
      'GetTripsFail'
    );
  }

  GetTrips(userName) {
    
    $.ajax({url: '/api/trips/', userName})
    .done((data) => {
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