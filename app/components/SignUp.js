import React from 'react';
import {  Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock, Row, Well, Button, Form, Col, Checkbox } from 'react-bootstrap';
import { home } from '../stylesheets/style';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			value: ''
		};
	}
	handleChange(e) {
		this.setState({ value: e.target.value})
	}
  render() {
    return (
			<div className="Row">
				<div className="col-md-4">
				</div>
				<div className="col-md-4" style={{paddingTop: '80px'}}>
	      	<Well>
		      	<Form horizontal>
			      	<FormGroup controlId="formControlsText"> 
			      		<Col componentClass={ControlLabel} sm={4}>
			      			First Name
		      			</Col>
			      		<Col sm={8}>
			      			<FormControl type="text" placeholder="Enter first name" />
		      			</Col>
			      	</FormGroup>
			      	<FormGroup controlId="formControlsText"> 
			      		<Col componentClass={ControlLabel} sm={4}>
			      			Last Name
		      			</Col>
			      		<Col sm={8}>
			      			<FormControl type="text" placeholder="Enter last name" />
		      			</Col>
			      	</FormGroup>
			      	</Form>
			      	<Form>
			      	<FormGroup controlId="formControlsText"> 
			      		<ControlLabel>Username</ControlLabel>
			      		<FormControl type="text" placeholder="Enter Username" />
			      	</FormGroup>
  		      	<FormGroup controlId="formControlsPassword"> 
			      		<ControlLabel>Password</ControlLabel>
			      		<FormControl type="password" placeholder="Enter Password"/>
			      	</FormGroup>
		      		<FormGroup controlId="formControlsText"> 
			      		<ControlLabel>Email</ControlLabel>
			      		<FormControl type="text" placeholder="Enter Username" />
			      	</FormGroup>
	      	    <FormGroup controlId="formControlsTextarea">
					      <ControlLabel>Bio</ControlLabel>
					      <FormControl componentClass="textarea" placeholder="Tell us a little about yourself ..." />
					    </FormGroup>
					    <FormGroup>
					      <Col sm={10}>
					        <Checkbox>Remember me</Checkbox>
					      </Col>
					    </FormGroup>	
					    { ' ' }		      	
			      	<Button type="button" bsStyle="success">
			      		Create Account
			      	</Button>
		     	 </Form>
	     	 </Well>
	      </div>
				<div className="col-md-4">
				</div>
      </div>
    );
  }
}

export default SignUp;