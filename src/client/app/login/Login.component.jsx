import React from 'react';
import {render} from 'react-dom';

import './login.scss';

export default () => {
  return (
    <div className="container">
      <div className="row col-items">
        <div className="col-md-4 col-item">
          hola
        </div>
        <div className="col-md-4 col-item">
          <img src={require("./resources/coffee-time.png")}/>
        </div>
      </div>
    </div>
  );
}