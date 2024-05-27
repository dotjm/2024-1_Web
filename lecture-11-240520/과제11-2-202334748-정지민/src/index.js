/**
 * React Index
 * 
 * Author: Jimin Jeong (@dotjm) - 202334748 정지민
 * Created on: 2024-05-26
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NotificationList from './components/NotificationList';
import Clock from './components/Clock';
import Counter from './components/Counter';
import RotationString from './components/RotationString';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <RotationString />
    <Counter />
    <Clock />
    <NotificationList />
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
