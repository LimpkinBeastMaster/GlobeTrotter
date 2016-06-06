import React from 'react'
import { Row, Button, Well, ButtonGroup } from 'react-bootstrap'


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
      <div className="Row" style={{marginBottom: "10px", clear: "both"}} >
        <Button type="button" bsStyle="primary" bsSize="small" block>
        {this.props.indx+1} <small>Name {name} Address {address} Info {info}</small>
        </Button>
      </div>
    )
  }
}

export default Stop;