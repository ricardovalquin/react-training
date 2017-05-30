import React from 'react';
import {render} from 'react-dom';
import {UISref, UISrefActive, UIView} from 'ui-router-react';

import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e){
    this.props.transition.router.stateService.go('login');
  }

  render() {
    return (
      <div className="container-fluid dashboard">
        <div className="row text-center">
          <header className="col-12">
            <button className="btn" onClick={this.logout}>logout</button>
          </header>
          <nav className="nav col-12 d-flex justify-content-around">
            <UISrefActive class="active">
              <UISref to="dashboard.day" params={{day:'monday'}}><a>monday</a></UISref>
            </UISrefActive>
            <UISrefActive class="active">
              <UISref to="dashboard.day" params={{day:'tuesday'}}><a>tuesday</a></UISref>
            </UISrefActive>
            <UISrefActive class="active">
              <UISref to="dashboard.day" params={{day:'wednesday'}}><a>wednesday</a></UISref>
            </UISrefActive>
            <UISrefActive class="active">
              <UISref to="dashboard.day" params={{day:'thursday'}}><a>thursday</a></UISref>
            </UISrefActive>
            <UISrefActive class="active">
              <UISref to="dashboard.day" params={{day:'friday'}}><a>friday</a></UISref>
            </UISrefActive>
            <UISrefActive class="active">
              <UISref to="dashboard.day" params={{day:'saturday'}}><a>saturday</a></UISref>
            </UISrefActive>
            <UISrefActive class="active">
              <UISref to="dashboard.day" params={{day:'sunday'}}><a>sunday</a></UISref>
            </UISrefActive>
          </nav>
          <UIView className="container" name="dashboard"/>
          <footer className="col-12 footer">
            <button className="btn" onClick={this.logout}>logout</button>
          </footer>
        </div>
      </div>
    );
  }

}

export default Dashboard;
