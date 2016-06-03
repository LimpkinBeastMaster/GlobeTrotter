import React from 'react';
import SearchBar from './SearchBar';
import TripList from './TripList';
import AllTripsStore from '../stores/AllTripsStore';
import AllTripsActions from '../actions/AllTripActions';
import { search, trips } from '../stylesheets/style';

class AllTripsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = AllTripsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AllTripsStore.listen(this.onChange);
        AllTripsActions.GetTrips();
    }

    componentWillUnmount() {
        AllTripsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        var tarr = this.state.trips.map((trip, indx) => {
            return (<TripList key={indx} trip={trip} />)
        });

        return (
        	<div className='all-trips-view' style={search}>
        		<div className="search-bar">
        			<SearchBar />
        		</div>
        		<div className="trips" style={trips}>
        		  {tarr}
        		</div>
            </div>
    );
  }
}

export default AllTripsView;