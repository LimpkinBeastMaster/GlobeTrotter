import React from 'react';

var tripDisplay = {
	fontSize: "22px", 
	height: "60px",
	width: "950px",
	marginLeft: "auto",
	marginRight: "auto",
	marginTop: "10px",
	marginBottom: "10px"
}

var likes = {
	height: "50px",
	width: "100px",
	padding: "5px",
	marginTop: "5px",
	marginBottom: "5px",
	marginRight: "10px",
	borderStyle: "solid",	
	float: "left"
}

var tripBar = {
	fontSize: "18px", 
	height: "50px",
	width: "800px",
	marginTop: "5px",
	marginBottom: "5px",
	float: "left"
}

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