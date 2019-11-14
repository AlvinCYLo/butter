import React from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Pin from '../Pin';
import Info from '../Info';

import RESPONSE from '../../api/response.json';

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
    currentActivity: {}
  };

  updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  renderActivityMarker = (activity, index) => {
    return (
      <Marker key={`marker-${index}`}
        latitude={parseFloat(activity.latitude)}
        longitude={parseFloat(activity.longitude)}
      >
        <Pin size={20} onClick={() => this.setState({ currentActivity: activity })} />
      </Marker>
    );
  };

  // renderPopup() {
  //   const { currentActivity } = this.state;

  //   return (
  //     currentActivity && (
  //       < Popup
  //         tipSize={5}
  //         anchor="top"
  //         longitude={parseInt(currentActivity.longitude)}
  //         latitude={parseInt(currentActivity.latitude)}
  //         closeOnClick={false}
  //         onClose={() => this.setState({ currentActivity: {} })}
  //       >
  //         <Info info={currentActivity} />
  //       </Popup >
  //     )

  //   )
  // }

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

        {/* {this.renderPopup()} */}
      </MapGL>
    );
  }
}

export default Map;