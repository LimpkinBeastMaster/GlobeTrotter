import React from 'react'
import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import { home } from '../stylesheets/style'
import NavLink from './NavLink'

class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
  render() {
    return (
    	<div className="home" style={home}>
	    	<Jumbotron>
	      <h1>TravelApp</h1> 
	      <span>
	      	<NavLink 
	      		to="/login">
	      		Login
	      	</NavLink>
	      	<strong> | </strong>
	      	<NavLink 
	      		to="/signup">
	      		SignUp
	      	</NavLink>
	      	<strong> | </strong>
	      	<NavLink 
	      		to="/UserTrips">
	      		UserTrips
	      	</NavLink>
	      	<strong> | </strong>
	      	<NavLink 
	      		to="/AllTrips">
	      		AllTrips
	      	</NavLink>
	      </span>
	      </Jumbotron>
	      {this.props.children}
      </div>
    );
  }
}

export default Home;