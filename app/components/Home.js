//THE MAIN PAGE AT FOR / INDEX

import React from 'react'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import AllTripActions from '../actions/AllTripActions'
import AllTripsStore from '../stores/AllTripsStore';
import NavLink from './NavLink'
import Globe from './Globe'

import { Image, Col, Row, ButtonToolbar, Button, Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trips: UserStore.getState().trips,
      user: UserStore.getState().user,
      stops: AllTripsStore.getState().stops
    }
    this.onChange = this.onChange.bind(this);
    this.allStops = this.allStops.bind(this);
  }

  componentDidMount() {
    console.log('AT HOME');
    AllTripActions.GetStops()
    UserStore.listen(this.onChange);
    AllTripsStore.listen(this.allStops);

    //HomeActions.getChallenges();
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
    AllTripsStore.unlisten(this.allStops);
  }

  onChange(state) {
    let trips = state.trips;
    let user = state.user;
    this.setState({trips, user});
  }

  allStops(state) {
    let stops = state.stops;
    this.setState({stops})
  }

  handleLogin(event) {
    event.preventDefault(); 
    console.log('props.history:', this.props.history);
    const path = '/login';
    this.props.history.push(path);
  }

  handleSignup(event) {
    event.preventDefault(); 
    console.log('props.history:', this.props.history);
    const path = '/signup';
    this.props.history.push(path);
    }

  render() {
    return (
      <div className="Row" >
        <table>
          <tr>
          </tr>
          <tr>
          </tr>
        </table>
        <div className="col-md-2 text-center">
        </div> 
        <div className="col-md-8">
          <Globe width={860} height={689} radius={689/2} velocity={.02} coords={this.state.stops}/>
        </div>
        <div className="col-md-2">
        </div>
      </div>
    );
  }
}

export default Home;