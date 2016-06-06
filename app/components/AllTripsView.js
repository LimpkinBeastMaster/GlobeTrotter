import React from 'react';
import SearchBar from './SearchBar';
import TripList from './TripList';
import AllTripsStore from '../stores/AllTripsStore';
import AllTripsActions from '../actions/AllTripActions';
import allData from '../stores/data/allData'
import { Row, PageHeader } from 'react-bootstrap'
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
      
      if(type !== 3) {
          AllTripsActions.ChangeLikes(trip, index, type);
      }
  }

  render() {
    var tripArr = this.state.trips.map((trip, indx) => {
      return (<TripList key={indx} index={indx} trip={trip} clickfxn={this.handleTripClick.bind(this)}/>)
    });

    return (
      <div>
      	<div className='Row'>
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <PageHeader>Trips Feed <small></small></PageHeader>
          </div>
          <div className="col-md-2">
          </div>  
      		<div style={{marginBottom: "10px", clear: "both"}}>
            <div className="search-bar" >
              <SearchBar />
            </div>
      		</div>
      		<div style={{clear: "both"}}>
      		  {tripArr}
      		</div>
        </div>
      </div>
    );
  }
}

export default AllTripsView;