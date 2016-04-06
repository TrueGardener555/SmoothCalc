import React, { Component } from 'react';
import ScreenView from '../components/ScreenView';
class App extends Component {
  constructor() {
    super();
    
    // Initial state of the component
    this.state = {currVal: '0'};
  }

  updateCurrVal() {
    console.log('hi');  
    this.setState({currVal: this.state.currVal + '4'});
  }
  render() {
    return (
      <div className='app'>
      <ScreenView currVal={this.state.currVal} updateCurrVal={this.updateCurrVal.bind(this)}/>
      <div>This is the App Component </div>
      </div>
    );
  }

}

export default App;

