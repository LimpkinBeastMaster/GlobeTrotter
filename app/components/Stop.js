import React from 'react';

class Stop extends React.Component {
  render() {
    var name = '';
    var address = '';
    var info = '';
    if (this.props.data) {
      name = this.props.data.stopName || '';
      address = this.props.data.stopAddress || '';
      info = this.props.data.stopInfo || '';
    }
    return (
      <div className="stops">
        Name: {name}
        Address: {address}
        Info: {info}
      </div>
    )
  }
}

export default Stop;