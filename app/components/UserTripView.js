import React from 'react';
import TripList from './TripList';
import UserStore from '../stores/UserStore'
import { search, trips } from '../stylesheets/style'
 
class UserTripsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
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