import React, { Component } from 'react';
import ScreenView from './ScreenView';
import ButtonView from './ButtonView';
import TitleView from './TitleView';

const CalcContainer = (props) => {
  return (
  <div>
    <TitleView/>
    <ScreenView currVal={props.currVal}/>
    <ButtonView
      oneButton={props.oneButton}
      twoButton={props.twoButton}
      threeButton={props.threeButton}
      addButton={props.addButton}
      subtractButton={props.subtractButton}
      fourButton={props.fourButton}
      fiveButton={props.fiveButton}
      sixButton={props.sixButton}
      sevenButton={props.sevenButton}
      eightButton={props.eightButton}
      nineButton={props.nineButton}
      multiplyButton={props.multiplyButton}
      divideButton={props.divideButton}
      powerButton={props.powerButton}
      zeroButton={props.zeroButton}
      backspaceButton={props.backspaceButton}
      decimalButton={props.decimalButton}
      plusMinusButton={props.plusMinusButton}
      enterButton={props.enterButton}
      clearButton={props.clearButton}
    />
  </div>
  );
};

export default CalcContainer;
