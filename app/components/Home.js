//THE MAIN PAGE AT FOR / INDEX

import React from 'react'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import NavLink from './NavLink'
import Globe from './Globe'

import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import { home } from '../stylesheets/style'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log('AT HOME');
    UserStore.listen(this.onChange);
    //HomeActions.getChallenges();
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
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
          velocity={.02} />
      </div>
    );
  }
}

export default Home;