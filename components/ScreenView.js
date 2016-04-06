import React, { Component } from 'react';

class ScreenView extends Component {
  constructor(props) {
    super(props);

    // Initial state of the component
    this.state = {cool: 5};
  }


  render() {
    return <div>value of props: {this.props.currentVal} </div>;
  }
}

ScreenView.propTypes = {
  currentVal: React.PropTypes.any.isRequired
};
export default ScreenView;

