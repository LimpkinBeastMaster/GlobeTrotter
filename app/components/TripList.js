import React from 'react'
import { Router, Route, Link } from 'react-router'
import { Row, Button, Well, ButtonGroup } from 'react-bootstrap'
import { tripDisplay, likes, tripBar } from '../stylesheets/style'
import CreateTripActions from '../actions/CreateTripActions'

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
  	return (
      <div className="Row" style={{clear: "both"}}>
        <div className="col-md-2">
          <Button type="button" bsSize="large" disabled block>
            +{this.props.trip.likes}
          </Button>
        </div>
          <div className="col-md-8" style={{ margin: '0 auto 10px' }}>
          <Button type="button" bsSize="large" bsStyle="primary" block>
            {this.props.trip.title}
          </Button> 
        </div> 
        <div className="col-md-2">
          <ButtonGroup>
            <Button bsStyle="info" bsSize="large" onClick={this.props.clickfxn.bind(null, this.props.trip, this.props.index, 1)}>
              <span className="glyphicon glyphicon-arrow-up"></span>
            </Button>
            <Button bsStyle="warning" bsSize="large" onClick={this.props.clickfxn.bind(null, this.props.trip, this.props.index, 1)}>
              <span className="glyphicon glyphicon-arrow-down"></span>
            </Button>
          </ButtonGroup>
        </div> 
    	</div>
    )
  };
};


export default TripList;