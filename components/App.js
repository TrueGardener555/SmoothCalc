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
    if (this.state.clean) {
      console.log(this.state.clean);
      //this.setState({clean: !this.state.clean});
    }
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
  plusMinusButton() {
    let temp = [this.state.currVal[0] * -1].concat(this.state.currVal.slice(1));
    this.setState({currVal: temp});
  }
  addButton() {
    // Only add if there's more than one value in the stack
    if (this.state.currVal.length > 1) {
      let val1 = parseInt(this.state.currVal[0], 10);
      let val2 = parseInt(this.state.currVal[0], 10);
      let temp = [val1 + val2].concat(this.state.currVal.slice(2));
      this.setState({currVal: temp});
    }
  }
  subtractButton() {
    // Only subtract if there's more than one value in the stack
    if (this.state.currVal.length > 1) {
      let temp = [this.state.currVal[1] - this.state.currVal[0]].concat(this.state.currVal.slice(2));
      this.setState({currVal: temp});
    }
  }
  multiplyButton() {
    // Only multiply if there's more than one value in the stack
    if (this.state.currVal.length > 1) {
      let temp = [this.state.currVal[0] * this.state.currVal[1]].concat(this.state.currVal.slice(2));
      this.setState({currVal: temp});
    }
  }
  divideButton() {
    // Only divide if there's more than one value in the stack
    if (this.state.currVal.length > 1) {
      let temp = [this.state.currVal[1] / this.state.currVal[0]].concat(this.state.currVal.slice(2));
      this.setState({currVal: temp});
    }
  }
  enterButton(){
    let temp = this.state.currVal.slice(0,1).concat(this.state.currVal);
    this.setState({currVal: temp, clean: true});
  }
  backspaceButton() {
    let temp = this.state.currVal.slice(1);
    let currReg = this.state.currVal[0];
    currReg = currReg.substring(0, currReg.length - 1);
    temp.unshift(currReg);
    this.setState({currVal: temp});
  }
  powerButton(){
    if (this.state.currVal.length > 1) {
      let temp = [Math.pow(this.state.currVal[1], this.state.currVal[0])].concat(this.state.currVal.slice(2));
      this.setState({currVal: temp});
    }
  }
  render() {
    return (
      <div className='app'>
      <ScreenView 
        currVal={this.state.currVal}
        oneButton={this.oneButton.bind(this)}
        twoButton={this.twoButton.bind(this)}
        threeButton={this.threeButton.bind(this)}
        addButton={this.addButton.bind(this)}
        subtractButton={this.subtractButton.bind(this)}
        fourButton={this.fourButton.bind(this)}
        fiveButton={this.fiveButton.bind(this)}
        sixButton={this.sixButton.bind(this)}
        sevenButton={this.sevenButton.bind(this)}
        eightButton={this.eightButton.bind(this)}
        nineButton={this.nineButton.bind(this)}
        multiplyButton={this.multiplyButton.bind(this)}
        divideButton={this.divideButton.bind(this)}
        powerButton={this.powerButton.bind(this)}
        zeroButton={this.zeroButton.bind(this)}
        backspaceButton={this.backspaceButton.bind(this)}
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

