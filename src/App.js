import React from 'react';
import Maps from './components/Map';

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
      <Maps />
    );
  };

}

export default App;
