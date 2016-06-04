import React from 'react';
import Stop from './Stop';
import CreateTripStore from '../stores/CreateTripStore';

class StopList extends React.Component {
  render() {
    return (
      <div>
      { this.props.data.map((stop) => {
        return (
          <Stop
           data={stop.stopData}
          />
        )
      })}
      </div>
    )
  }
}

export default StopList;