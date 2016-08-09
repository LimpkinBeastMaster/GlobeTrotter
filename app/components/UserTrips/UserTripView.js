import React from 'react';
import TripList from '../AllTrips/TripList';
import UserTripsStore from './UserTripsStore'
import UserTripsActions from './UserTripsActions'
import userData from '../../data/userData'
import { Row, PageHeader } from 'react-bootstrap'
import { search, trips } from '../../stylesheets/style'
 
class UserTripView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: UserTripsStore.getState().trips || [],
      user: UserTripsStore.getState().user,
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // console.log('TRIPS', this.state.trips);
    // console.log('USERMOUNTED', this.state.user);
    UserTripsStore.listen(this.onChange);
    UserTripsActions.GetTrips(this.state.user);
    console.log(this.state.trips);

  }

  componentWillUnmount() {
    UserTripsStore.unlisten(this.onChange);
  }

  onChange() {
    // console.log(UserTripsStore.getState().trips)
    this.setState({
      trips: UserTripsStore.getState().trips || [],
      user: UserTripsStore.getState().user
    });
  }

  RemoveTrip(trip, index, type, e) {
   // console.log('hi');
    e.preventDefault();
    console.log('name, title', trip, index, type);
    if(type === 3) {
      UserTripsActions.RemoveTrip(trip, index, type);
    }
  }

  render() {
    return (
      <div>
        <div className="Row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <PageHeader>My Trips <small>Signed in as user Ben</small></PageHeader>
          </div>
          <div className="col-md-2">
          </div>
        </div>
        <div style={{marginBottom: "10px", clear: "both"}}>
          <div>
            {this.state.trips.map((trip, indx) =>
              <TripList key={indx} trip={trip} clickfxn={this.RemoveTrip.bind(this)}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UserTripView;