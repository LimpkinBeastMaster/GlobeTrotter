import alt from '../alt';

class AllTripsActions {
  constructor() {
    this.generateActions(
      'GetTripsSuccess',
      'GetTripsFail'
    );
  }

  GetTrips() {
    $.ajax({url: '/api/trips'})
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

export default alt.createActions(AllTripsActions); 