import React from 'react';
import SearchBar from './SearchBar';
import TripList from './TripList';

class AllTripsView extends React.Component {
  render() {

  	var trips = {
  		width: "1000px",
  		clear: "both",
  		marginLeft: "auto",
  		marginRight: "auto"
  	}

    return (
    	<div className='all-trips-view'>
    		<div className="search-bar">
    			<SearchBar />
    		</div>
    		<div className="trips" style={trips}>
    			<TripList />
    			<TripList />
    			<TripList />
    		</div>
      </div>
    );
  }
}

export default AllTripsView;