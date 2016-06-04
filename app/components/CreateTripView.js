import React from 'react';
import Maps from './Maps';

//import CreateTripsStore from '../stores/CreateTripsStore';
//import CreateTripsActions from '../actions/CreateTripActions';
//import { search, trips } from '../stylesheets/style';

import {Link} from 'react-router';
import { map } from '../stylesheets/style';

//Mytrips link needs to point link to a specific /usertrips/id
//once a user logs in can have an id on the window....kinda kills point tho
//

class CreateTripsView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className='create-trips-view'>
            <div style={map}>
              <Maps />
            </div>
            <div className="navigate" >
            <Link to={'/alltrips'}>Create</Link>
            <Link to={'/alltrips'}>All Trips</Link>
            <Link to={'/alltrips'}>MyTrips</Link>
            // add trip button --> get userstore username, get createTrip array from  createtripstore, post to database 
            // 
            </div>
        </div>
    );
  }
}

export default CreateTripsView;