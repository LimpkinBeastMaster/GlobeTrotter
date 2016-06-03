import React from 'react';
import { tripDisplay, likes, tripBar } from '../stylesheets/style';

class TripList extends React.Component {

  constructor(props) {
    super(props);    
  }

//add link component around button and route to the passed in prop ID of the trip to redirect to route page
  render () {
  	return (
      <div className="trip-list" style={tripDisplay}>
    		<div className="likes" style={likes}>
    			+{this.props.trip.likes}
    		</div>
    		<button 
      		className='btn btn-primary' 
      		type="button" 
      		data-toggle="dropdown" 
      		style={tripBar}>
      		{this.props.trip.title} 
      		<span className="carat">
      		</span>
      	</button>
    	</div>
    )
  };
};


export default TripList;