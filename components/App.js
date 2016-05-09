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
    this.state = {currVal: ['0'], clean: true};
  }
  
  addToRegister(character) {
    let temp = this.state.currVal.slice(1);
    console.log('char is', typeof character); 
    temp.unshift(parseFloat(this.state.currVal[0] + character, 10));
    this.setState({currVal: temp});

    if (this.state.clean) {
      console.log(this.state.clean);
      //this.setState({clean: !this.state.clean});
    }
  }
  
  // Buttons that will add to the input of the screen
  oneButton() {
    this.addToRegister('1');
  }
  twoButton() {
    this.addToRegister('2');
  }
  threeButton() {
    this.addToRegister('3');
  }
  fourButton() {
    this.addToRegister('4');
  }
  fiveButton() {
    this.addToRegister('5');
  }
  sixButton() {
    this.addToRegister('6');
  }
  sevenButton() {
    this.addToRegister('7');
  }
  eightButton() {
    this.addToRegister('8');
  }
  nineButton() {
    this.addToRegister('9');
  }
  zeroButton() {
    this.addToRegister('0');
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
      let val1 = parseFloat(this.state.currVal[0], 10);
      let val2 = parseFloat(this.state.currVal[1], 10);
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
  clearButton() {
    this.setState({currVal: ['0']});
  }
  backspaceButton() {
    let temp = this.state.currVal.slice(1);
    let currReg = '' + this.state.currVal[0];
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
        clearButton={this.clearButton.bind(this)}
      />
      <div>This is the App Component </div>
      </div>
    );
  }

}

export default App;

