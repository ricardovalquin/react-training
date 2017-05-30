import React from 'react';
import {render} from 'react-dom';
import {UISref, UISrefActive} from 'ui-router-react';

import './day.scss';

class Day extends React.Component {
  constructor(props){
    super(props);
    this.description = this.description.bind(this);
  }

  description() {
    switch(this.props.resolves.$stateParams.day){
      case 'monday':
        return <div className="col-12">The fist day :s</div>
      case 'friday':
        return <div className="col-12">Almost weekend :)</div>
      case 'saturday':
        return <div className="col-12">Weekend :D</div>
      case 'sunday':
        return <div className="col-12">Weekend :D</div>
    }
  }

  render() {
    return (
      <div className="container day">
        <div className="row text-center">
          <div className="col-12 title">
            tasks for {this.props.resolves.$stateParams.day}
          </div>
          { this.description() }
        </div>
      </div>
    );
  }

}

export default Day;
