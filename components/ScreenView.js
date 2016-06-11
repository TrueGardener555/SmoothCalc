import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';

class ScreenView extends Component {
  constructor(props) {
    super(props);

    // Initial state of the component
    // testing ability to push to github
  }

  handleKey(e) {
    console.log('***************', e.charCode);
    this.props.eightButton();
  }

  render() {
    return (
      <div onKeyPress={this.handleKey.bind(this)} tabIndex="1">
        <div className="screenTitle">
          <h1>A really Smooth RPN Calculator</h1>
        </div>
        <div className='screen' onKeyPress={this.handleKey} tabIndex="1">
          <div className="register">
            register z: {this.props.currVal[2]} 
          </div>
          <div className="register">
            register y: {this.props.currVal[1]} 
          </div>
          <div className="register">
            register x: {this.props.currVal[0]} 
          </div>
        </div>
        <div className="allButtons" >
          <div className='row'>
            <div className="col-1-5 button" >7</div>
            <div className="col-1-5 button" onClick={this.props.eightButton}>8</div>
            <div className="col-1-5 button" onClick={this.props.nineButton}>9</div>
            <div className="col-1-5 button" onClick={this.props.powerButton}>y^x</div>
            <div className="col-1-5 button" onClick={this.props.backspaceButton}>&lt;-</div>
          </div>
          <div className='row'>
            <span className="col-1-5 button" onClick={this.props.fourButton}>4</span>
            <span className="col-1-5 button" onClick={this.props.fiveButton}>5</span>
            <span className="col-1-5 button" onClick={this.props.sixButton}>6</span>
            <span className="col-1-5 button" onClick={this.props.multiplyButton}>x</span>
            <span className="col-1-5 button" onClick={this.props.divideButton}>/</span>
          </div>
          <div className='row'>
            <span className="col-1-5 button" onClick={this.props.oneButton}>1</span>
            <span className="col-1-5 button" onClick={this.props.twoButton}>2</span>
            <span className="col-1-5 button" onClick={this.props.threeButton}>3</span>
            <span className="col-1-5 button" onClick={this.props.addButton}>+</span>
            <span className="col-1-5 button" onClick={this.props.subtractButton}>-</span>
          </div>
          <div className='row'>
            <span className="col-1-5 button" onClick={this.props.zeroButton}>0</span>
            <span className="col-1-5 button" onClick={this.props.decimalButton}>.</span>
            <span className="col-1-5 button" onClick={this.props.plusMinusButton}>+/-</span>
            <span className="col-1-5 button" onClick={this.props.enterButton}>ENTER</span>
            <span className="col-1-5 button" onClick={this.props.clearButton}>C</span>
          </div>
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

