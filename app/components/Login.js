import React from 'react'
import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock, Row, Well, Button } from 'react-bootstrap'
import { home } from '../stylesheets/style'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			value: '',
			user: '',
			password: ''
		};
	}

	handleChange(e) {
		this.setState({ value: e.target.value})
	}

	goToMyTrips(e) {
		e.preventDefault();
		const path = '/splash';
		this.props.history.push(path)
	}

  render() {
    return (
			<div className="Row">
				<div className="col-md-4">
				</div>
				<div className="col-md-4">
	      	<Well>
		      	<form>
			      	<FormGroup controlId="formControlsText"> 
			      		<ControlLabel>Username</ControlLabel>
			      		<FormControl type="text" placeholder="Enter Username" />
			      	</FormGroup>
  		      	<FormGroup controlId="formControlsText"> 
			      		<ControlLabel>Password</ControlLabel>
			      		<FormControl type="password" placeholder="Enter Password" />
			      	</FormGroup>
			      	<Button type="submit" bsStyle="primary" onClick={this.goToMyTrips.bind(this)}>
			      		Sign In
			      	</Button>
			      	{ ' ' }
			      	<Button type="button" bsStyle="success">
			      		Create Account
			      	</Button>
		     	 </form>
	     	 </Well>
	      </div>
				<div className="col-md-4">
				</div>
      </div>
    );
  }
}

export default Login;