import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AllTrips from './components/AllTripsView';
import UserTrips from './components/UserTripView';

export default (
  <Route component={App}>
    <Route path='/' component={AllTrips} />
  </Route>
);