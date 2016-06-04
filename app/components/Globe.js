import React from 'react';
import Visuals from './d3Globe';

class Globe extends React.Component {
  componentDidMount() {
    var map = new Visuals({
      width: this.props.width || 960,
      height: this.props.height || 600,
      radius: this.props.radius || (600 / 2),
      velocity: this.props.velocity || .02
    })
    var el = document.getElementById('Globe');
    map.create(el)
    map.draw('https://raw.githubusercontent.com/mbostock/topojson/master/examples/world-110m.json');
  }

  render() {
    return (
    <div id="Globe">
    </div>
  )
  }
}
module.exports = Globe; 

// <Globe width={200}
  //   height={100}
  //   radius={100 / 2}
  //   velocity={.02} />
  //   <span>