import React from 'react';
import Maps from './components/Maps.jsx';
import Globe from './components/Globe.jsx';

class Container extends React.Component {
  render() {
    return (
      <div>
        <Globe width={200}
          height={100}
          radius={100 / 2}
          velocity={.02}/>
        <div id="map">
          <Maps>
          </Maps>
        </div>
      </div>
    )
  }
}

module.exports = Container;