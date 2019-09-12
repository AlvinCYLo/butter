import React from 'react';
import Planner from './pages/Planner/Planner';

class App extends React.Component {
  render(){
    return (
      <Planner style={{
          overflowY: 'scroll'
      }}/>
    );
  }
}

export default App;
