import React, { Component } from 'react';
import Home from './home/Home';
import Info from './info/Info';



class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Info />

      </div>
    );
  }
}

export default App;