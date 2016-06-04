import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AllTrips from './components/AllTripsView';
import CreateTripsView from './components/CreateTripView';
import UserTripsView from './components/UserTripView';
import Login from './components/Login';

//<Route path='/usertrip/:id' component={UserTripsView} />
//figure out way to route to profile ^ 

export default (
  <Route component={App}> 
    <Route path='/' component={Home} />
    <Route path='/alltrips' component={AllTrips} />
    <Route path='/login' component={Login} />
    <Route path='/createtrips' component={CreateTripsView} />
  </Route>
);


