import React from 'react'
import { Row, Button, Well, ButtonGroup, Panel } from 'react-bootstrap'



class Stop extends React.Component {
  render() {
    var name = '';
    var address = '';
    var info = '';
    var header = '';
    if (this.props.data) {
      name = this.props.data.stopName || '';
      address = this.props.data.stopAddress || '';
      info = this.props.data.stopInfo || '';
      header = 'Stop ' + (Number(this.props.indx) + 1); 
    }
    return (
      <div className="Row" style={{marginBottom: "10px", clear: "both"}} >
        <Panel header={header} bsStyle="primary">
         <strong>Name</strong> {name} | <strong>Address</strong> {address} | <strong>Info</strong> {info} 
        </Panel>
      </div>
    )
  }
}

export default Stop;