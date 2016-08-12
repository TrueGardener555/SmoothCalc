import React, { Component } from 'react';

const ScreenView = (props) => {
  return (
  <div>
    <div className='screen'>
      {console.log('this.props', props)}
      <div className="register">
        register z: {props.currVal[2]} 
      </div>
      <div className="register">
        register y: {props.currVal[1]} 
      </div>
      <div className="register">
        register x: {props.currVal[0]} 
      </div>
    </div>    
  </div>
  );
};

ScreenView.propTypes = {
  currVal: React.PropTypes.array.isRequired,
};

export default ScreenView;
