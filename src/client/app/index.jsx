import React from 'react';
import {render} from 'react-dom';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';

// import styles
import './styles/style.css';


let helloState = {
  name: 'hello',
  url: '/hello',
  component: () => <h3>hello world</h3>
}

let aboutState = {
  name: 'about',
  url: '/about',
  component: () => <h3 className="hola">Its the UI-Router hello world app!</h3>
}

class App extends React.Component {
  render () {
    return (
      <UIRouter plugins={[pushStateLocationPlugin]} states={[helloState, aboutState]}>
        <div>
          <UISrefActive class="active">
            <UISref to="hello"><a>Hello</a></UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="about"><a>About</a></UISref>
          </UISrefActive>
          <UIView/>
        </div>
      </UIRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));