import React from 'react';
import Map from './components/Map';

import { discoverActivities } from './api/getActivities';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getActivities: () => { discoverActivities() }
    }

  };

  render() {
    return (
      <Map />
    );
  };

}

export default App;
