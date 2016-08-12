import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '../components/App';
// import styles from './styles.css';
import styles from './sassDemo.scss';

render(
  // Define the encompassing components
  // DOM element we want to mount it to
  <App/>,
  document.getElementById('app')
);


