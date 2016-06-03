import React from 'react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker, Polyline } from "react-google-maps";
import { default as update } from "react-addons-update";

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      path: [],
    }
  }

  handleMapClick(event) {
    let { markers, path } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          showInfo: false,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    path = update(path, {
      $push: [
        event.latLng
      ],
    });
    this.setState({ markers, path });
  }

  handleMarkerRightclick(index, event) {
    let { markers, path } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    path = update(path, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers, path });
  }

  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }
  
  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }

  saveData() {
    let name =document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let info = document.getElementById('info').value;

    console.log(name, address, info);
  }

  renderInfoWindow(ref, marker) {
    
    return (
      // "<table id='table'>"
      //            "<tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>"
      //            "<tr><td>Address:</td> <td><input type='text' id='address'/></td> </tr>"
      //            "<tr><td>Info:</td> <td><input type='text' id='info'/></td> </tr>"
      //            "<tr><td></td><td><input type='button' value='Save & Close' onclick='saveData()'/></td></tr>";
      <InfoWindow 
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)} >
        <table>
          <tbody id='table'>
            <tr>
              <td>Name:</td> 
              <td><input type='text' id='name'/> </td>
            </tr>
            <tr>
              <td>Address:</td> 
              <td><input type='text' id='address'/></td>
            </tr>
            <tr>
              <td>Info:</td>
              <td><input type='text' id='info'/></td>
            </tr>
            <tr>
              <td></td>
              <td><input type='button' value='Save & Close' onClick={this.saveData.bind(this)}/></td>
            </tr>
          </tbody>
        </table>       
      </InfoWindow>
      
    );
    
  }

  render() {
    console.log('test2');
    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: '100%',
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map)}
            defaultZoom={10}
            defaultCenter={{ lat: 37.78355726989257, lng: -122.40891695022583 }}
            onClick={this.handleMapClick.bind(this)}
          >
            {this.state.markers.map((marker, index) => {
              const ref = `marker_${index}`;
              return (
                <Marker
                  {...marker}
                  ref={ref}
                  onRightclick={this.handleMarkerRightclick.bind(this, index)}
                  onClick={this.handleMarkerClick.bind(this, marker)} >
                  {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
                </Marker>

              );
            })}
            <Polyline path={this.state.path}>
            </Polyline>
          </GoogleMap>
        }
      />
    );
  }
}

module.exports = Maps;