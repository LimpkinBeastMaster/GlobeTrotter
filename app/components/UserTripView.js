import React from 'react';
import TripList from './TripList';
import UserTripsStore from '../stores/UserTripStore'
import UserTripsActions from '../actions/UserTripActions'
import { search, trips } from '../stylesheets/style'
 
class UserTripsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserTripsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log('USERMOUNTED', this.props.params.id);
    UserTripsStore.listen(this.onChange);
    UserTripsActions.GetTrips(this.props.params.id);
  }

  componentWillUnmount() {
    UserTripsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
    	<div className='all-trips-view' style={search}>
    		<div className="trips" style={trips}>
        { this.state.trips.map((trip, indx) =>
    			<TripList key={indx} trip={trip}/>
          )
        }
    		</div>
      </div>
    );
  }
}

export default UserTripsView;