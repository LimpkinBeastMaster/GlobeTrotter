import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AllTrips from './components/AllTripsView'
import CreateTrips from './components/CreateTripView'
import UserTrips from './components/UserTripView'
import Splash from './components/Splash'

export default (
  <Route component={App}> 
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/createtrips" component={CreateTrips} />
    <Route path="/alltrips" component={AllTrips} />
    <Route path="/mytrips" component={UserTrips} />
    <Route path="/splash" component={Splash} />
  </Route>
);
