import React, { Component } from 'react';

class ScreenView extends Component {
  constructor(props) {
    super(props);

    // Initial state of the component
  }

  handleClick() {

  }
  render() {
    return (
      <div>
        <div className='screen'>
          <div>
            register z: {this.props.currVal[2]} 
          </div>
          <div>
            register y: {this.props.currVal[1]} 
          </div>
          <div>
            register x: {this.props.currVal[0]} 
          </div>
        </div>
        <div>
          <button onClick={this.props.sevenButton}>7</button>
          <button onClick={this.props.eightButton}>8</button>
          <button onClick={this.props.nineButton}>9</button>
          <button onClick={this.props.powerButton}>y^x</button>
          <button onClick={this.props.backspaceButton}>&lt;-</button>
        </div>
        <div>
          <button onClick={this.props.fourButton}>4</button>
          <button onClick={this.props.fiveButton}>5</button>
          <button onClick={this.props.sixButton}>6</button>
          <button onClick={this.props.multiplyButton}>x</button>
          <button onClick={this.props.divideButton}>/</button>
        </div>
        <div>
          <button onClick={this.props.oneButton}>1</button>
          <button onClick={this.props.twoButton}>2</button>
          <button onClick={this.props.threeButton}>3</button>
          <button onClick={this.props.addButton}>+</button>
          <button onClick={this.props.subtractButton}>-</button>
        </div>
        <div>
          <button onClick={this.props.zeroButton}>0</button>
          <button onClick={this.props.decimalButton}>.</button>
          <button onClick={this.props.plusMinusButton}>+/-</button>
          <button onClick={this.props.enterButton}>ENTER</button>
          <button onClick={this.props.clearButton}>C</button>
        </div>
      </div>
    );
  }
}

ScreenView.propTypes = {
  currVal: React.PropTypes.array.isRequired,
  updateCurrVal: React.PropTypes.func
};
export default ScreenView;

