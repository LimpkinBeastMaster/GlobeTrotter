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



class App extends React.Component {
  render() {
    return (

      <div>
      	<span>
          <NavLink 
            to="/login">
            Login
          </NavLink>
          <strong> | </strong>
          <NavLink 
            to="/createtrips">
            Create Trips
          </NavLink>
          <strong> | </strong>
          <NavLink 
            to="/mytrips">
            My Trips
          </NavLink>
          <strong> | </strong>
          <NavLink 
            to="/alltrips">
            AllTrips
          </NavLink>        
        </span>
        {this.props.children}
      </div>
    );
  }
}

export default App;