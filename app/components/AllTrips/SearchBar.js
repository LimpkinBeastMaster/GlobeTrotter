import React from 'react';
import { searchButton, searchBox, searchContainer } from '../../stylesheets/style'
import { Button, ButtonGroup, DropdownButton, Row, MenuItem, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap'


var SearchBar = (props) => (
	<div className="Row">	
		<div className="col-md-2">
		</div>
			<div className="col-md-8">
				<Form horizontal>
					<FormGroup controlId="searchTrips">
					<Col sm={2}>
						<DropdownButton title="Search By" id="bg-nested-dropdown">
							<MenuItem eventKey="1">Location</MenuItem>
							<MenuItem eventKey="2">User</MenuItem>
						</DropdownButton>
					</Col>
					<Col sm={8}>
						<FormControl type="text" placeholder="Find your next trip..."/>
					</Col>
					<Col sm={2}>
				    <Button bsStyle="success" type="submit" block>
	  					Submit
  					</Button>
					</Col>
					</FormGroup>
				</Form>
			</div>
		<div className="col-md-2">
		</div>
	</div>	
);

export default SearchBar;