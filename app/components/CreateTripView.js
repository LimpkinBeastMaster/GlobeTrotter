import React from 'react';
import Maps from './Maps';
import { Row, PageHeader } from 'react-bootstrap'
import {Link} from 'react-router';
import { map, stopList } from '../stylesheets/style';
import CreateTripStore from '../stores/CreateTripStore';
import UserStore from '../stores/UserStore';
import CreateTripActions from '../actions/CreateTripActions';
import StopList from './StopList';

//Mytrips link needs to point link to a specific /usertrips/id
//once a user logs in can have an id on the window....kinda kills point tho
//

class CreateTripsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stops: CreateTripStore.getState().stops,
    }
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    CreateTripStore.listen(this.onChange);
  }

  componentWillUnmount() {
    CreateTripStore.unlisten(this.onChange);
  }

  onChange() {
    this.setState({
      stops: CreateTripStore.getState().stops
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    var postObject = {
        username: UserStore.getState().user,
        tripname: e.target.tripName.value,
        stops: this.state.stops
    }
    console.log('Posting this!', postObject);
    CreateTripActions.CreateTrip(postObject);
  }

  clearMap(e) {
    CreateTripActions.ClearMap();

    this._input.setState({
      markers: [],
      path: []
    });
  }

  render() {
    return (
      <div>
        <div className='Row'>
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <PageHeader>Build Trip <small></small></PageHeader>
          </div>
          <div className="col-md-2">
          </div>  
        </div>
        <div classNAme="Row">
          <div className="col-md-6">
            <div className='create-trips-view'>
              <div style={map}>
                <Maps 
                  markers={ this.state.stops }
                  path={
                    this.state.stops.map((stop) => {
                      return stop.position;
                    })}
                  ref={(map) => this._input = map}
                />
              </div>
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type='text' id='tripName'/>
              <button type='submit'> Submit Trip </button>
            </form>
            <button type='submit' onClick={(e) => this.clearMap(e)}> Clear Map </button>
            <StopList id="stop-list" style={stopList} data={this.state.stops}/>
          </div>
          <div className="col-md-6">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateTripsView;