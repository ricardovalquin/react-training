import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Clock from './Clock.jsx';

class App extends React.Component {
  render () {
    return <div>
      <p> Hello React!</p>
      <AwesomeComponent name="Camilo"/>
      <Clock locale="zh-Hans-CN" timeZone="Asia/Shanghai"/>
      <Clock locale="zh-Hans-CN" timeZone="America/New_York"/>
      <Clock locale="us" timeZone="America/New_York"/>
    </div>;
  }
}
function mateo(){
  return'mateo';
}

render(<App/>, document.getElementById('app'));