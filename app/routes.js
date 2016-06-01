import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AllTrips from './components/AllTripsView';
import UserTrips from './components/UserTripView';
import SearchBar from './components/SearchBar';
import TripList from './components/TripList';
import AllTripsStore from './stores/AllTripsStore';
import UserTripsStore from './stores/UserTripStore';

export default (
  <Route component={App}>
    <Route path='/' component={UserTrips} />
  </Route>
);