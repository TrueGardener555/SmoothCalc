import React, { Component } from 'react';
import ScreenView from '../components/ScreenView';

var divStyle = {
  fontSize: 30,
  color: 'red'
};

class App extends Component {
  constructor() {
    super();
    
    // Initial state of the component
    this.state = {currVal: '0'};
  }

  oneButton() {
   this.setState({currVal: this.state.currVal + '1'});
  }
  twoButton() {
   this.setState({currVal: this.state.currVal + '2'});
  }

  updateCurrVal() {
    console.log('hi');  
    this.setState({currVal: this.state.currVal + '4'});
  }
  render() {
    return (
      <div className='app'>
      <ScreenView 
        currVal={this.state.currVal}
        oneButton={this.oneButton.bind(this)}
        twoButton={this.twoButton.bind(this)}
        updateCurrVal={this.updateCurrVal.bind(this)}
      />
      <div>This is the App Component </div>
      </div>
    );
  }

}

export default App;

