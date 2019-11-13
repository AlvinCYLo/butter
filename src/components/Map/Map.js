import React from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {

  state = {
    viewport: {
      latitude: 49.2827,
      longitude: -123.1207,
      zoom: 13
    },
    type: {
      events: true,
      pois: true,
    },
    filters: {
      latitude: "",
      longitude: "",
      category: "",
      start: "",
      end: ""
    },
    activities: []
  };

  updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  renderActivityMarker = (activity) => {
    return (
      <Marker latitude={activity.latitude}
        longitude={activity.longitude}
      >

      </Marker>
    );
  };

  renderPopup = (activity) => {
    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={activity.longitude}
        latitude={activity.latitude}
        closeOnClick={false}
      >

      </Popup>
    )
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width={"100%"}
        height={920}
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        onViewportChange={this.updateViewport}
      >
        
      </MapGL>
    );
  }
}

export default Map;