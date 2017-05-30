import React from 'react';
import {render} from 'react-dom';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import states from './app.states.jsx';

class App extends React.Component {
  render () {
    return (
      <UIRouter plugins={[pushStateLocationPlugin]} states={states}>
        <div>
          <UIView name="main"/>
        </div>
      </UIRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));