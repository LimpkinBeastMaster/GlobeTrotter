import React from 'react';
import { tripDisplay, likes, tripBar } from '../stylesheets/style';
import CreateTripActions from '../actions/CreateTripActions';
class TripList extends React.Component {

  constructor(props) {
    super(props);    
  }

  clickHandler(e) {
    // console.log(e.target.id)
    // console.log(e.currentTarget.id)
    CreateTripActions.GetTrip(e.currentTarget.id)
  }

//add link component around button and route to the passed in prop ID of the trip to redirect to route page
  render () {
  	return (
      <div className="trip-list" style={tripDisplay}>
    		<div className="likes" style={likes}>
    			+{this.props.trip.likes}
    		</div>
    		<button 
          id={this.props.trip.id}
      		className="btn btn-primary" 
      		type="button" 
      		data-toggle="dropdown" 
      		style={tripBar}
          onClick = {this.clickHandler.bind(this)}>
      		{this.props.trip.title} 
      		<span className="carat">
      		</span>
      	</button>
    	</div>
    )
  };
};


export default TripList;