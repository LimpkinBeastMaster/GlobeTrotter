import React from 'react';
import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { home } from '../stylesheets/style';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = { 
			value: ''
		};
	}
	handleChange(e) {
		this.setState({ value: e.target.value})
	}
  render() {
    return (
    	<div className="home" style={home}>
	      <form>
	      	<FormGroup 
	      		controlId="formControlsFirstName"> 
	      		<ControlLabel>First Name</ControlLabel>
	      		<FormControl type="text" placeholder="Enter First Name" />
	      	</FormGroup>
	      	<FormGroup 
	      		controlId="formControlsLastName"> 
	      		<ControlLabel>Last Name</ControlLabel>
	      		<FormControl type="text" placeholder="Enter Last Name" />
	      	</FormGroup>
	      	<FormGroup 
	      		controlId="formControlsPassword"> 
	      		<ControlLabel>Password</ControlLabel>
	      		<FormControl type="text" placeholder="Enter Password" />
	      	</FormGroup>
	      	<button type="submit" className="btn btn-primary">Sign In</button>
	      	<button type="button" className="btn">Create Account</button>
	      </form>
      </div>
    );
  }

}

export default SignUp