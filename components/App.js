import React, { Component } from 'react';
import ScreenView from '../components/ScreenView';
class App extends Component {
  constructor() {
    super();
    
    // Initial state of the component
    this.state = {currentVal: 5};
  }


  render() {
    return (
      <div className='app'>
      <ScreenView currentVal={this.state.currentVal}/>
      <div>This is the App Component </div>
      </div>
    );
  }

}

export default App;

