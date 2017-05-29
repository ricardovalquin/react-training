import React from 'react';
import {render} from 'react-dom';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
// import styles
import './login.scss';

export default () => <div className="login">hola<img src={require("./resources/coffee-time.png")}/></div>