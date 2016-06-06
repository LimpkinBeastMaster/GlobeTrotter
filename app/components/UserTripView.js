import React from 'react';
import TripList from './TripList';
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import userData from '../stores/data/userData'
import { Row, PageHeader } from 'react-bootstrap'
import { search, trips } from '../stylesheets/style'
 
class UserTripView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: UserStore.getState().trips || [],
      user: UserStore.getState().user,
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // console.log('TRIPS', this.state.trips);
    // console.log('USERMOUNTED', this.state.user);
    UserStore.listen(this.onChange);
    UserActions.GetTrips(this.state.user);
    console.log(this.state.trips);

  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange() {
    // console.log(UserStore.getState().trips)
    this.setState({
      trips: UserStore.getState().trips || [],
      user: UserStore.getState().user
    });
  }

  RemoveTrip(trip, index, type, e) {
   // console.log('hi');
    e.preventDefault();
    console.log('name, title', trip, index, type);
    if(type === 3) {
      UserActions.RemoveTrip(trip, index, type);
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
              <TripList index={indx} trip={trip} show2={false} clickfxn={this.RemoveTrip.bind(this)}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UserTripView;