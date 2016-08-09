import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import AllTrips from './components/AllTrips/AllTripsView'
import CreateTrips from './components/CreateTrip/CreateTripView'
import UserTrips from './components/UserTrips/UserTripView'

export default (
  <Route component={App}> 
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/createtrips" component={CreateTrips} />
    <Route path="/alltrips" component={AllTrips} />
    <Route path="/mytrips" component={UserTrips} />
  </Route>
);
