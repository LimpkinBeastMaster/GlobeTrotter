import React from 'react';
import SearchBar from './SearchBar';
import TripList from './TripList';

class AllTripsView extends React.Component {
  render() {

  	var search = {
  		height: "200px",
  		width: "1000px",
  		marginLeft: "auto",
  		marginRight: "auto"
  	}

  	var trips = {
  		width: "1000px",
  		clear: "both",
  		marginLeft: "auto",
  		marginRight: "auto"
  		}

    return (
    	<div className='all-trips-view' style={search}>
    		<div className="search-bar">
    			<SearchBar />
    		</div>
    		<div className="trips" style={trips}>
    			<TripList likes="829"  start="Tokyo" end="Koyoto" />
    			<TripList likes="429" start="Tokyo" end="Shizuoka" />
    			<TripList likes="225" start="Tokyo" end="Akita" />
    			<TripList likes="211" start="Tokyo" end="Matsumoto" />
    			<TripList likes="120" start="Tokyo" end="Fukoka" />
    		</div>
      </div>
    );
  }
}

export default AllTripsView;