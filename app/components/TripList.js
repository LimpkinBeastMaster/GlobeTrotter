import React from 'react';
import { tripDisplay, likes, tripBar } from '../stylesheets/style';

var TripList = (props) => (

	<div className="trip-list" style={tripDisplay}>
		<div className="likes" style={likes}>
			+{props.trip.likes}
		</div>
		<button 
  		className='btn btn-primary' 
  		type="button" 
  		data-toggle="dropdown" 
  		style={tripBar}>
  		{props.trip.title} 
  		<span className="carat">
  		</span>
  	</button>
	</div>
);


export default TripList;