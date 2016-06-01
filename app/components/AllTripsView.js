import React from 'react';
import SearchBar from './SearchBar';
import TripList from './TripList';
import AllTripsStore from '../stores/AllTripsStore';
import { search, trips } from '../stylesheets/style';

class AllTripsView extends React.Component {
	constructor(props) {
		super(props);
		this.state = AllTripsStore.getState();
	}

  render() {

    return (
    	<div className='all-trips-view' style={search}>
    		<div className="search-bar">
    			<SearchBar />
    		</div>
    		<div className="trips" style={trips}>
    		{ this.state.trips.map((trip, indx) => 
    			<TripList key={indx} trip={trip} />
    			)
    		}
    		</div>
      </div>
    );
  }
}

export default AllTripsView;