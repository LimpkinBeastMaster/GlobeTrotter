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
    // map.draw('https://raw.githubusercontent.com/mbostock/topojson/master/examples/world-110m.json');
    // map.draw('../img/custom.geo.json', this.props.coords);
    //console.log(this.props.coords);
  }

  componentDidUpdate() {
    // map.draw('https://raw.githubusercontent.com/mbostock/topojson/master/examples/world-110m.json');
    // map.delete();
    map.draw('../img/custom.geo.json', this.props.coords);
    console.log(this.props.coords); 
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

