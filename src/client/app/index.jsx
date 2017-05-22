import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Clock from './Clock.jsx';
import Calculator from './Calculator.jsx';
import LoginForm from './controlled-uncontrolled/LoginForm.jsx';

class App extends React.Component {
  render () {
    return <div>
      <p> Hello React!</p>
      <AwesomeComponent name="Mateo"/>
      <Clock locale="zh-Hans-CN" timeZone="Asia/Shanghai"/>
      <Clock locale="zh-Hans-CN" timeZone="America/New_York"/>
      <Clock locale="us" timeZone="America/New_York"/>
      <Calculator />
      <LoginForm/>
    </div>;
  }
}
function mateo(){
  return 'mateo';
}

render(<App/>, document.getElementById('app'));