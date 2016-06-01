import React from 'react';

class TripList extends React.Component {
	render() {

		var tripDisplay = {
  		height: "50px",
  		width: "950px",
  		marginLeft: "auto",
  		marginRight: "auto",
  		marginTop: "15px",
  		marginBottom: "10px"
  	}

		return (
			<div className="trip-list">
				<button 
		  		className='btn btn-primary' 
		  		type="button" 
		  		data-toggle="dropdown" 
		  		style={tripDisplay}>
		  		Tokyo To Kyoto
		  		<span class="carat">
		  		</span>
		  	</button>
			</div>
		);
	}
}

export default TripList;