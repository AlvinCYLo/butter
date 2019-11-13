import React from 'react';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {

  state = {
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width={"100%"}
        height={920}
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}

export default Map;