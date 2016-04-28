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

  // Buttons that will add to the input of the screen
  oneButton() {
   this.setState({currVal: this.state.currVal + '1'});
  }
  twoButton() {
   this.setState({currVal: this.state.currVal + '2'});
  }
  threeButton() {
   this.setState({currVal: this.state.currVal + '3'});
  }
  fourButton() {
   this.setState({currVal: this.state.currVal + '4'});
  }
  fiveButton() {
   this.setState({currVal: this.state.currVal + '5'});
  }
  sixButton() {
   this.setState({currVal: this.state.currVal + '6'});
  }
  sevenButton() {
   this.setState({currVal: this.state.currVal + '7'});
  }
  eightButton() {
   this.setState({currVal: this.state.currVal + '8'});
  }
  nineButton() {
   this.setState({currVal: this.state.currVal + '9'});
  }
  zeroButton() {
   this.setState({currVal: this.state.currVal + '0'});
  }
  decimalButton() {
   this.setState({currVal: this.state.currVal + '.'});
  }
  plusMinusButton() {
   this.setState({currVal: this.state.currVal + '+/-'});
  }
  render() {
    return (
      <div className='app'>
      <ScreenView 
        currVal={this.state.currVal}
        oneButton={this.oneButton.bind(this)}
        twoButton={this.twoButton.bind(this)}
        threeButton={this.threeButton.bind(this)}
        fourButton={this.fourButton.bind(this)}
        fiveButton={this.fiveButton.bind(this)}
        sixButton={this.sixButton.bind(this)}
        sevenButton={this.sevenButton.bind(this)}
        eightButton={this.eightButton.bind(this)}
        nineButton={this.nineButton.bind(this)}
        zeroButton={this.zeroButton.bind(this)}
        decimalButton={this.decimalButton.bind(this)}
        plusMinusButton={this.plusMinusButton.bind(this)}
      />
      <div>This is the App Component </div>
      </div>
    );
  }

}

export default App;

