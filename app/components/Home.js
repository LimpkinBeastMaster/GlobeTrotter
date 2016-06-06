//THE MAIN PAGE AT FOR / INDEX

import React from 'react'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import AllTripActions from '../actions/AllTripActions'
import AllTripsStore from '../stores/AllTripsStore';
import NavLink from './NavLink'
import Globe from './Globe'

import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import { home } from '../stylesheets/style'

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

  handleClick(character) {
   
  }

  render() {
    return (
      <div className="home" style={home}>
        <Jumbotron>
          <h1>TravelApp</h1>
        </Jumbotron>
        <Globe width={500}
          height={400}
          radius={400 / 2}
          velocity={.02}
          coords={this.state.stops}>
        </Globe>
      </div>
    );
  }
}

export default Home;