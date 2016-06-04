import React from 'react';
import TripList from './TripList';
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import { search, trips } from '../stylesheets/style'
 
class UserView extends React.Component {
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

  fxn() {
    console.log('hi');
  }

  render() {
    return (
      <div className='all-trips-view' style={search}>
        <div className="trips" style={trips}>
        { this.state.trips.map((trip, indx) =>
          <TripList key={indx} trip={trip} clickfxn={this.fxn.bind(this)}/>
          )
        }
        </div>
      </div>
    );
  }
}

export default UserView;