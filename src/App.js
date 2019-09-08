import React from 'react';
import Schedule from './pages/Schedule/Schedule';

class App extends React.Component {
  render(){
    return (
      <Schedule/>
      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={}/>
      //     <Route exact path="/schedule" component={}/>
      //     <Route exact path="/map" component={}/>
      //   </Switch>
      // </Router>
    );
  }
}

export default App;
