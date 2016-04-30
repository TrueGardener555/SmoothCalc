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
    this.state = {currVal: ['0']};
  }

  // Buttons that will add to the input of the screen
  oneButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '1');
    this.setState({currVal: temp});
  }
  twoButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '2');
    this.setState({currVal: temp});
  }
  threeButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '3');
    this.setState({currVal: temp});
  }
  fourButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '4');
    this.setState({currVal: temp});

  }
  fiveButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '5');
    this.setState({currVal: temp});
  }
  sixButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '6');
    this.setState({currVal: temp});
  }
  sevenButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '7');
    this.setState({currVal: temp});
  }
  eightButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '8');
    this.setState({currVal: temp});
  }
  nineButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '9');
    this.setState({currVal: temp});
  }
  zeroButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '0');
    this.setState({currVal: temp});
  }
  decimalButton() {
    let temp = this.state.currVal.slice(1);
    temp.unshift(this.state.currVal[0] + '.');
    this.setState({currVal: temp});
  }
  // Work on this functionality
  plusMinusButton() {
    this.setState({currVal: this.state.currVal + '+/-'});
  }

  enterButton(){
    let temp = this.state.currVal.slice(0,1).concat(this.state.currVal);
    this.setState({currVal: temp});
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
        enterButton={this.enterButton.bind(this)}
      />
      <div>This is the App Component </div>
      </div>
    );
  }

}

export default App;

