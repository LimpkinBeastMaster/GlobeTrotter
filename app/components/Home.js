//THE MAIN PAGE AT FOR / INDEX

import React from 'react'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import NavLink from './NavLink'
import Globe from './Globe'

import { Col, Row, ButtonToolbar, Button, Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
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
      <Row> 
        <Col md={1}></Col>
        <div className="col-md-9 col-md-offset-2" >
          <Globe width={860}
            height={689}
            radius={689 / 2}
            velocity={.02} />
          <Row > 
            <div className="col-md-6">
              <Button bsStyle="default" onClick={this.handleLogin.bind(this)}>Login</Button>
            </div>
            <div className="col-md-6">
              <Button bsStyle="primary" onClick={this.handleSignup.bind(this)}>Sign up</Button>
            </div>                           
            {this.props.children}
          </Row> 
        </div>
        <Col md={1}></Col>
      </Row>
    );
  }
}

export default Home;