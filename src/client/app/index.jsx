import React from 'react';
import {render} from 'react-dom';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import stateConfig from './app-state.config.jsx';


class App extends React.Component {
  render () {
    return (
      <UIRouter config={stateConfig} plugins={[pushStateLocationPlugin]}>
        <UIView className="container" name="main"/>
      </UIRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));