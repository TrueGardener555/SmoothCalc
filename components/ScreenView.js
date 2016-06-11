import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';

class ScreenView extends Component {
  constructor(props) {
    super(props);

    // Initial state of the component
    // testing ability to push to github
  }

  backspace(e) {
    e.preventDefault();
    console.log('&&&&&&&&&&&&&&&&&&&&', e.charCode);
  }

  handleKey(e) {
    console.log('***************', e.charCode);
    switch (e.charCode) {
      case 8:
        e.preventDefault();
        this.props.backspaceButton();
        break; 
      case 48:
        this.props.zeroButton();
        break;
      case 49:
        this.props.oneButton();
        break;
      case 50:
        this.props.twoButton();
        break;
      case 51:
        this.props.threeButton();
        break;
      case 52:
        this.props.fourButton();
        break;
      case 53:
        this.props.fiveButton();
        break;
      case 54:
        this.props.sixButton();
        break;
      case 55:
        this.props.sevenButton();
        break;
      case 56:
        this.props.eightButton();
        break;
      case 57:
        this.props.nineButton();
        break;
    }
  }

  render() {
    return (
      <div onKeyPress={this.handleKey.bind(this)} tabIndex="1">
        <div className="screenTitle" >
          <h1>A really Smooth RPN Calculator</h1>
        </div>
        <div className='screen'>
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

