import React from 'react'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import NavLink from './NavLink'
import Globe from './Globe'


import { Image, ButtonGroup, Col, Row, ButtonToolbar, Button, Jumbotron, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import { home } from '../stylesheets/style'

class Splash extends React.Component {

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

  handleNew(event) {
    event.preventDefault(); 
    console.log('props.history:', this.props.history);
    const path = '/createtrips';
    this.props.history.push(path);
  }

  handleFind(event) {
    event.preventDefault(); 
    console.log('props.history:', this.props.history);
    const path = '/alltrips';
    this.props.history.push(path);
  }

  handleMyTrips(event) {
    event.preventDefault(); 
    console.log('props.history:', this.props.history);
    const path = '/mytrips';
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="Row" >
        
      
        <div className="col-md-1">
        </div>
        <div className="col-md-10 text-center">
          <div className="Row">
            <Image src="https://images.unsplash.com/photo-1461770354136-8f58567b617a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=fa8d832bf65d8ee934deec2a75c127d3" rounded/>
          </div>
          <div className="Row">
            <ButtonGroup className="text-center">
              <Button bsStyle="warning" onClick={this.handleNew.bind(this)}>New</Button>
              <Button bsStyle="success" onClick={this.handleFind.bind(this)}>Find</Button>
              <Button bsStyle="primary" onClick={this.handleMyTrips.bind(this)}>My Trips</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="col-md-1"></div>
    </div> 
    );
  }
}

export default Splash;