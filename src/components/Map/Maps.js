import React from 'react';
import MapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Pin from '../Pin';
import ControlPanel from '../ControlPanel';
import RESPONSE from '../../api/response.json';

import mapStyles from './Map.css';
import styles from './marker-style.css';

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};

class Maps extends React.Component {

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
    currentActivity: null,
    savedActivities: new Map()
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

  saveChanged = (value) => {
    this.setState({
      currentActivity: {...this.state.currentActivity, saved: value}
    });
    if (value && !this.state.savedActivities.has(this.state.currentActivity.name)) {
      this.setState({
        savedActivities: this.state.savedActivities.set(this.state.currentActivity.name, this.state.currentActivity)
      });
    }
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width={"100%"}
        height={930}
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        onViewportChange={this.updateViewport}
        onClick={() => this.setState({ currentActivity: null })}
      >
        {RESPONSE.map(this.renderActivityMarker)}
        {this.renderPopup()}
        {this.state.currentActivity &&
          <ControlPanel activity={this.state.currentActivity}
            onChange={this.saveChanged}
            savedActivities={this.state.savedActivities}
          />
        }
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
    );
  }
}

export default Maps;