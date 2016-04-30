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
          value of props: {this.props.currVal} 
        </div>
        <div>
          <button onClick={this.props.sevenButton}>7</button>
          <button onClick={this.props.eightButton}>8</button>
          <button onClick={this.props.nineButton}>9</button>
        </div>
        <div>
          <button onClick={this.props.fourButton}>4</button>
          <button onClick={this.props.fiveButton}>5</button>
          <button onClick={this.props.sixButton}>6</button>
        </div>
        <div>
          <button onClick={this.props.oneButton}>1</button>
          <button onClick={this.props.twoButton}>2</button>
          <button onClick={this.props.threeButton}>3</button>
        </div>
        <div>
          <button onClick={this.props.zeroButton}>0</button>
          <button onClick={this.props.decimalButton}>.</button>
          <button onClick={this.props.plusMinusButton}>+/-</button>
        </div>
      </div>
    );
  }
}

ScreenView.propTypes = {
  currVal: React.PropTypes.string.isRequired,
  updateCurrVal: React.PropTypes.func
};
export default ScreenView;

