import React from 'react';
import BoilingVeredict from './BoilingVeredict.jsx';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    let celsiusTem = 0;
    if(this.props.scale = 'c') {
      celsiusTem = e.target.value;
    }else {
      celsiusTem = this.fromFahrenheitToCelsius(e.target.value);
    }
    this.setState({temperature: e.target.value, celsius: celsiusTem});
  }

  fromCelsiusToFahrenheit(celsius){
    return (celsius*9/5) + 32;
  }

  fromFahrenheitToCelsius(Fahr){
    return (Fahr - 32)*5/9;
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
        <BoilingVeredict celsius={this.state.temperatureCelsious}/>
      </fieldset>
    );
  }
}

export default TemperatureInput;