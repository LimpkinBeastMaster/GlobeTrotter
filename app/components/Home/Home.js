//THE MAIN PAGE AT FOR / INDEX

import React from 'react'
import UserStore from '../../stores/UserStore'
import UserActions from '../../actions/UserActions'
import AllTripActions from '../../actions/AllTripActions'
import AllTripsStore from '../../stores/AllTripsStore';
import NavLink from '../NavLink'
// import Globe from '../Globe'

import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock, Row, Well, Button, ButtonGroup } from 'react-bootstrap'
import { home, bg, bgImg } from '../../stylesheets/style'

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
        <div className="Row">
          <div className="col-md-6 col-md-offset-3" style={{paddingTop: '60px'}}>
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '2px', height: 250, color: '#fff', padding: '30px'}}>
              <h3 className="text-center">GLOBE TROTTER</h3>

                <div className="col-md-4 col-md-offset-2">

                  <Button type="submit" bsSize="large" style={{backgroundColor: 'rgba(91, 44, 111, 1)', border: 0, borderRadius: 0, color: '#fff'}} block>
                    Sign In
                  </Button>
                </div>

                  <div className="col-md-4">
                    <Button type="button" style={{backgroundColor: 'rgba(91, 44, 111, 1)', border: 0, borderRadius: 0, color: '#fff'}} bsSize="large" block>
                      Create Account
                    </Button>
                  </div>


            </div>
          </div>
        </div>

        {/*<Globe width={500}
          height={400}
          radius={400 / 2}
          velocity={.02}
          coords={this.state.stops}>
        </Globe>*/}

      </div>
    );
  }
}

export default Home;