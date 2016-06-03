//THE MAIN PAGE AT FOR / INDEX

import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';

import { Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { home } from '../stylesheets/style';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log('AT HOME');
    HomeStore.listen(this.onChange);
    //HomeActions.getChallenges();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem nunc, scelerisque nec quam quis, fermentum suscipit orci.</p> 
        </Jumbotron>
        <form>
          <FormGroup 
            controlId ="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter Username"
              onChange={this.handleChange} />
              <FormControl.Feedback />
              <HelpBlock>Usually your email address.</HelpBlock>            
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Home;