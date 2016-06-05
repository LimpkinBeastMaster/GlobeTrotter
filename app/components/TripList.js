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

  render () {
    var sign = '';
    this.props.trip.likes > 0 ? sign = '+' : sign = ''; 
  	return (
      <div className="trip-list" style={tripDisplay}>
    		<div className="likes" style={likes}>
    			{sign+JSON.stringify(this.props.trip.likes).replace(/["]/g, '')}
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
        <a href="#" className="btn btn-default" onClick={this.props.clickfxn.bind(null, this.props.trip, this.props.index, 1)}><span className="glyphicon glyphicon-arrow-up"></span></a>
        <a href="#" className="btn btn-default" onClick={this.props.clickfxn.bind(null, this.props.trip, this.props.index, 2)}><span className="glyphicon glyphicon-arrow-down"></span></a>
    	</div>
    )
  };
};


export default TripList;