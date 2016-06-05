import React from 'react';
import SearchBar from './SearchBar';
import TripList from './TripList';
import AllTripsStore from '../stores/AllTripsStore';
import AllTripsActions from '../actions/AllTripActions';

import { search, trips } from '../stylesheets/style';
import { searchButton, searchBox, searchContainer } from '../stylesheets/style';

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

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      var queryResult = [];
      this.state.trips.forEach(function(trip) {
        if(trip.title.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1) {
          queryResult.push(trip);
        }
      });      
      console.log('QUERYRESULT', queryResult);
              
      this.setState({
        trips : queryResult
      })
    }
  }

  handleTripClick(trip, index, type, e) {
    e.preventDefault();
    console.log('name, title', trip, index, type);
    AllTripsActions.ChangeLikes(trip, index, type);
  }

  render() {
    var tripArr = this.state.trips.map((trip, indx) => {
      return (<TripList key={indx} index={indx} trip={trip} clickfxn={this.handleTripClick.bind(this)}/>)
    });

    return (
    	<div className='all-trips-view' style={search}>
    		<div className="search-bar">
    			<form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
            <div className='input-group'>
              <input style={searchContainer} type='text' className='form-control' placeholder={'Find your next trip...'} value={this.state.searchQuery} onChange={AllTripsActions.updateSearchQuery} />
              <span className='input-group-btn'>
              <button className='btn btn-default' onChange={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
              </span>
            </div>
            </form>
    		</div>
    		<div className="trips" style={trips}>
    		  {tripArr}
    		</div>
      </div>
    );
  }
}

export default AllTripsView;