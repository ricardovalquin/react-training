import React from 'react';
import {render} from 'react-dom';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import Login from './login/Login.jsx'

// let helloState = {
//   name: 'hello',
//   url: '/hello',
//   component: () => <h3>hello world</h3>
// }

// let aboutState = {
//   name: 'about',
//   url: '/about',
//   component: () => <h3 className="hola">Its the UI-Router hello world app!</h3>
// }

let loginState = {
  name: 'login',
  url: '/login',
  component: Login
}

class App extends React.Component {
  render () {
    return (
      <UIRouter plugins={[pushStateLocationPlugin]} states={[loginState]}>
        <div>
          <UISrefActive class="active">
            <UISref to="login"><a>Login</a></UISref>
          </UISrefActive>
          <UIView/>
        </div>
      </UIRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));