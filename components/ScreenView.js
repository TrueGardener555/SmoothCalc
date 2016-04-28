import React, { Component } from 'react';

class ScreenView extends Component {
  constructor(props) {
    super(props);

    // Initial state of the component
  }
  
  handleClick() {
      console.log(' someghint');
  }
  render() {
    return (
      <div className='screen'>
      value of props: {this.props.currVal} 
      <button onClick={this.props.updateCurrVal}>update</button>
      </div>
    );
  }
}

ScreenView.propTypes = {
  currVal: React.PropTypes.string.isRequired,
  updateCurrVal: React.PropTypes.func
};
export default ScreenView;

