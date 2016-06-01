import React from 'react';
import TripList from './TripList';
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

class UserTripsView extends React.Component {
  render() {
    return (
    	<div className='all-trips-view' style={search}>
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

export default UserTripsView;