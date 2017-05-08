import React from 'react';
import BoilingVeredict from './BoilingVeredict.jsx';
import TemperatureInput from './TemperatureInput.jsx';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentScale: 'f',
      celsius: '',
      temperature: ''
    };
  }

  handleChange(value) {
    let celsiusVal = value;
    if(this.state.currentScale == 'f'){
      celsiusVal = this.fromFahrenheitToCelsius(value);
    }
    this.setState({temperature: value, celsius: celsiusVal});
  }

  fromCelsiusToFahrenheit(celsius){
    return (celsius*9/5) + 32;
  }

  fromFahrenheitToCelsius(Fahr){
    return (Fahr - 32)*5/9;
  }

  render() {
    return (
      <div>
        <TemperatureInput scale={this.state.currentScale} handleTemperatureChange={this.handleChange} temperature={this.state.temperature}/>
        <BoilingVeredict celsius={this.state.celsius}/>
      </div>
    );
  }
}

export default Calculator;