import React from 'react';
import Stop from './Stop';

class StopList extends React.Component {
  render() {
    return (
      <div>
      { this.props.data.map((stop, indx) => {
        return (
          <Stop data={stop.stopData} indx={indx} />
        )
      })}
      </div>
    )
  }
}

export default StopList;