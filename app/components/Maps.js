import React from 'react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker, Polyline, SearchBox } from "react-google-maps";
import { default as update } from "react-addons-update";

var inputStyle = {
  "border": `1px solid transparent`,
  "borderRadius": `1px`,
  "boxShadow": `0 2px 6px rgba(0, 0, 0, 0.3)`,
  "boxSizing": `border-box`,
  "MozBoxSizing": `border-box`,
  "fontSize": `14px`,
  "height": `32px`,
  "marginTop": `27px`,
  "outline": `none`,
  "padding": `0 12px`,
  "textOverflow": `ellipses`,
  "width": `200px`,
}

class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      path: [],
      bounds: null,
      center: {
        lat: 37.78355726989257, 
        lng: -122.40891695022583 
      },
    }
  }

  handleViewChanged() {
    this.setState({
      bounds: this._googleMapComponent.getBounds(),
      center: this._googleMapComponent.getCenter()
    })
  }
  handlePlacesChanged() {
    let places = this._searchBoxComponent.getPlaces();
    let marks = [];
    let { markers, path } = this.state;

    places.forEach(function (place) {
      marks.push({
        position: place.geometry.location,
      });
    });

    const mapCenter = marks.length > 0 ? marks[0].position : this.state.center;

    markers = update(markers, {
      $push: [
        {
          position: marks[0].position,
          showInfo: false,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    path = update(path, {
      $push: [
        marks[0].position
      ],
    });
    this.setState({ 
      center: mapCenter,
      markers, 
      path 
    });
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

  handleMarkerRightClick(index, event) {
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

    /*
      Send it to create trips store.
      
    */
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
            center={this.state.center}
            onClick={this.handleMapClick.bind(this)}
            onBoundsChanged={this.handleViewChanged.bind(this)}
          >
            {this.state.markers.map((marker, index) => {
              const ref = `marker_${index}`;
              return (
                <Marker
                  {...marker}
                  ref={ref}
                  onRightclick={this.handleMarkerRightClick.bind(this, index)}
                  onClick={this.handleMarkerClick.bind(this, marker)} >
                  {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
                </Marker>

              );
            })}
            <Polyline path={this.state.path}>
            </Polyline>
            <SearchBox
              bounds={this.state.bounds}
              ref={(box) => (this._searchBoxComponent = box)}
              onPlacesChanged={this.handlePlacesChanged.bind(this)}
              controlPosition={2}
              placeholder="Search locations here."
              style={inputStyle}
            />
          </GoogleMap>
        }
      />
    );
  }
}

module.exports = Maps;