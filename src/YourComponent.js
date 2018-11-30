import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

/*
 * Use this component as a launching-pad to build your functionality.
 *
 */

const mapStyles = {
  width: "80%",
  height: "90%"
};

export class MexicoCityMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  componentDidUpdate() {
    const google = window.google;

    this.map = new google.maps.Map(this.refs.map, {
      center: this.props.center,
      zoom: 4
    });

    this.createMarkers(this.props.markers);
  }

  createMarkers(users) {
    const google = window.google;

    users.map(user => {
      this.marker = new google.maps.Marker({
        position: {
          lat: user.location.latitude,
          lng: user.location.longitude
        },
        map: this.map
      });
      this.state.markers.push(this.marker);
    });
  }

  render() {
    return (
      <div className="container justify-content-center">
        <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{
            lat: 19.433376,
            lng: -99.141514
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Testing Purposes"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A"
})(MexicoCityMap);
