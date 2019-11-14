import React from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Pin from '../Pin';
import RESPONSE from '../../api/response.json';

import styles from './map-styles.css';

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
    activities: [...RESPONSE],
    currentActivity: null
  };

  updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  renderActivityMarker = (activity) => {
    return (
      <Marker key={`marker-${activity.name}`}
        latitude={parseFloat(activity.latitude)}
        longitude={parseFloat(activity.longitude)}
      >
        <Pin className="activity" size={20} onClick={() => this.setState({ currentActivity: activity })} />
      </Marker>
    );
  };

  renderPopup() {
    const { currentActivity } = this.state;
    if (currentActivity) {
      return (
        <Popup latitude={parseFloat(currentActivity.latitude)} longitude={parseFloat(currentActivity.longitude)} closeButton={false}>
          {currentActivity.name}
        </Popup>
      );
    }
    return null;
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
        {RESPONSE.map(this.renderActivityMarker)}
        {this.renderPopup()}
      </MapGL>
    );
  }
}

export default Map;