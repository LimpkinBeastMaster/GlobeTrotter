import React from 'react';
import Maps from './Maps';

//import CreateTripsStore from '../stores/CreateTripsStore';
//import CreateTripsActions from '../actions/CreateTripActions';
//import { search, trips } from '../stylesheets/style';

import {Link} from 'react-router';
import { map } from '../stylesheets/style';
import CreateTripStore from '../stores/CreateTripStore'
import UserStore from '../stores/UserStore'
import CreateTripActions from '../actions/CreateTripActions'

//Mytrips link needs to point link to a specific /usertrips/id
//once a user logs in can have an id on the window....kinda kills point tho
//

class CreateTripsView extends React.Component {

  constructor(props) {
      super(props);
  }

  handleSubmit(e) {
      e.preventDefault();
      var postObject = {
          username: UserStore.getState().user,
          tripname: e.target.tripName.value,
          stops: CreateTripStore.getState().stops
      }
      console.log('Posting this!', postObject);
      CreateTripActions.CreateTrip(postObject);
  }



  render() {
    return (
      <div className='create-trips-view'>
        <div style={map}>
          <Maps 
            markers={
              CreateTripStore.getState().stops.map((stop) => {
                stop.key = stop.id + ' stop'; return stop
              })}
            path={
              CreateTripStore.getState().stops.map((stop) => {
                stop.key = stop.id + ' path'; return stop.position
              })}
            />
        </div>
        <div className="navigate" >
          <Link to={'/alltrips'}>Create</Link>
          <Link to={'/alltrips'}>All Trips</Link>
          <Link to={'/alltrips'}>MyTrips</Link>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type='text' id='tripName'/>
            <button type='submit'> Submit Trip </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTripsView;