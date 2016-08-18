import React, { Component } from 'react';

const ScreenView = (props) => {
  return (
  <div>
    <div className='screen'>
      <div className="register">
        <span className='alignLeft'>z: </span> <span className="alignRight">{props.currVal[2]}</span> 
      </div>
      <div className="register">
        <span className='alignLeft'>y: </span> <span className="alignRight">{props.currVal[1]}</span> 
      </div>
      <div className="register">
        <span className='alignLeft'>x: </span> <span className="alignRight">{props.currVal[0]}</span> 
      </div>
    </div>    
  </div>
  );
};

ScreenView.propTypes = {
  currVal: React.PropTypes.array.isRequired,
};

export default ScreenView;
