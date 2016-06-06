import React from 'react';
import Visuals from './d3Globe';
import AllTripsStore from '../stores/AllTripsStore';

var map,
    el;

class Globe extends React.Component {
  componentDidMount() {
    map = new Visuals({
      width: this.props.width || 960,
      height: this.props.height || 600,
      radius: this.props.radius || (600 / 2),
      velocity: this.props.velocity || .02
    })
    el = document.getElementById('Globe');
    map.create(el)
  }

  componentDidUpdate() {
    map.draw('../img/custom.geo.json', this.props.coords);
    // console.log(this.props.coords); 
  }

  componentWillUnmount() {
    map.delete();
  }

  render() {
    console.log('Rendering?!');
    return (
    <div id="Globe">
    </div>
  )
  }
}
module.exports = Globe; 

