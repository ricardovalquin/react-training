import React from 'react';
import BoilingVerdict from './BoilingVeredict.jsx';
import TemperatureInput from './TemperatureInput.jsx';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  // handleChange(e) {
  //   this.setState({temperature: e.target.value});
  // }

  render() {
    // const temperature = this.state.temperature;
    return (
      <TemperatureInput scale="f"/>
    );
  }
}

export default Calculator;