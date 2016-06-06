//THE MAIN PAGE AT FOR / INDEX

import React from 'react'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import NavLink from './NavLink'
import Globe from './Globe'

import { Image, Col, Row, ButtonToolbar, Button, Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

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
          <Button className="text-center" bsStyle="primary" bsSize="large" onClick={this.handleSignup.bind(this)}>Sign up</Button>
        </div> 

        <div className="col-md-8">
          <Globe width={860} height={689} radius={689/2} velocity={.02} />
        </div>

        <div className="col-md-2">
        </div>

      </div>
    );
  }
}














export default Home;