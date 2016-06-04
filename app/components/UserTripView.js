import React from 'react';
import TripList from './TripList';
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import { search, trips } from '../stylesheets/style'
 
class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log('USERMOUNTED', this.props.params.id);
    UserStore.listen(this.onChange);
    UserActions.GetTrips(this.props.params.id);
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
    	<div className='all-trips-view' style={search}>
    		<div className="trips" style={trips}>
        { this.state.trips.map((trip, indx) =>
    			<TripList key={indx} trip={trip}/>
          )
        }
    		</div>
      </div>
    );
  }
}

export default UserView;