import React, { Component } from 'react';
import Home from './home/Home';
import Info from './info/Info';
import Plan from './plan/Plan';
import Contact from './contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Info />
        <Plan />
        <Contact />
      </div>
    );
  }
}

export default App;