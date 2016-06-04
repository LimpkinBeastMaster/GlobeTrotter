import React from 'react'
import NavLink from './NavLink'
import Globe from './Globe'
//import Globe from './Globe';
//import Maps from './Maps';

//Because route component set to app, can use this.props.children to route based on the url
// var map = {
//   height: '500px',
//   width: '500px'
// }

// <div style={map}>
//   <Maps>as</Maps>
// </div>
import { Router, Route, Link  } from 'react-router'
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer, IndexRoute, IndexLinkContainer } from 'react-router-bootstrap'

function fxn(path){
  this.props.history.push(path);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
             <a href="#">TravelApp</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/" activeClassName="active" onClick={fxn.bind(this, '/')}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/login" activeClassName="active" onClick={fxn.bind(this, '/login')}>
                <NavItem eventKey={2}>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/login" activeClassName="active" onClick={fxn.bind(this, '/login')}>
                <NavItem eventKey={3}>Sign Up</NavItem>
              </LinkContainer>
              <LinkContainer to="/createtrips" activeClassName="active" onClick={fxn.bind(this, '/createtrips')}>
                <NavItem eventKey={4}>Build Trip</NavItem>
              </LinkContainer>
              <LinkContainer to="/alltrips" activeClassName="active" onClick={fxn.bind(this, '/alltrips')}>
                <NavItem eventKey={5}>Trips Feed</NavItem>
              </LinkContainer>
              <LinkContainer to="/mytrips" activeClassName="active" onClick={fxn.bind(this, '/mytrips')}>
                <NavItem eventKey={6}>My Trips</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <Navbar.Form>
                <FormGroup>
                  <FormControl type="text" placeholder="Find your next trip..." />
                </FormGroup>
              </Navbar.Form>
            </Nav>
          </Navbar.Collapse>        
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}


export default App;