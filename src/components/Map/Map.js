import React from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Pin from '../Pin';
import RESPONSE from '../../api/response.json';
import mapStyles from './Map.css';
import styles from './marker-style.css';

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
        <div className="activity">
          <Pin activity={activity} onClick={() => { this.setState({ currentActivity: activity }) }} />
        </div>
      </Marker>
    );
  };

  renderPopup() {
    const { currentActivity } = this.state;
    if (currentActivity) {
      return (
        <Popup latitude={parseFloat(currentActivity.latitude)}
          longitude={parseFloat(currentActivity.longitude)}
          closeButton={true}
          closeOnClick={true}
          onClose={() => this.setState({ currentActivity: null })}
        >
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
        onClick={() => this.setState({ currentActivity: null })}
      >
        {RESPONSE.map(this.renderActivityMarker)}
        {this.renderPopup()}
      </MapGL>
    );
  }
}

export default Map;