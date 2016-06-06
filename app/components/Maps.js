import React from 'react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker, Polyline, SearchBox } from "react-google-maps";
import { default as update } from "react-addons-update";
import CreateTripActions from '../actions/CreateTripActions'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button, Col } from 'react-bootstrap';


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
      markers: this.props.markers || [], //Pass down props so that map can auto-populate
      path: this.props.path || [],
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
    CreateTripActions.AddPoint(this.state.markers)
    //Send an action to store
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
    CreateTripActions.AddPoint(this.state.markers)
    //Send an action to store
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
    CreateTripActions.AddPoint(this.state.markers)
    //Send an action to store
  }

  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }
  
  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }

  saveData(e, ref, marker) {
    e.preventDefault();
    let name = e.target.name.value;
    let address = e.target.address.value;
    let info = e.target.info.value;
    marker['stopData'] = {
      stopName: name,
      stopAddress: address,
      stopInfo: info
    }
    //console.log(this.state.markers);
    CreateTripActions.AddPoint(this.state.markers)
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
        onCloseclick={this.handleMarkerClose.bind(this, marker)}>
        <form onSubmit={(e) => this.saveData(e, ref, marker)} horizontal>
          <FormGroup bsSize="small" style={{marginBottom: "10px"}}>
            <Col componentClass={ControlLabel} sm={4}>
              Name
            </Col>
            <Col sm={8}>
            <FormControl type='text' id='name'/>
            </Col>
          </FormGroup>
          <span> { ' ' }</span>
          <FormGroup bsSize="small" style={{marginBottom: "10px"}}>
            <Col componentClass={ControlLabel} sm={4}>
            Address 
            </Col>
            <Col sm={8}>
              <FormControl type='text' id='address'/>
            </Col>
          </FormGroup>
          <span> { ' ' }</span>
          <FormGroup bsSize="small" style={{marginBottom: "10px"}}>
            <Col componentClass={ControlLabel} sm={4}>
              Info
            </Col>
            <Col sm={8}>
              <FormControl type='text' id='info'/>
            </Col>
          </FormGroup>
          <span> { ' ' }</span>
          <FormGroup>
            <Col smOffset={4} sm={8}>
              <Button type='submit' bsStyle="success" bsSize="small">Save & Close</Button>
            </Col>
          </FormGroup>
        </form>
      </InfoWindow>
      
    );
    
  }

  render() {
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