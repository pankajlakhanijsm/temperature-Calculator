import React, { Component } from 'react'
import TempratureInput from './tempratureInput'
import BoilingVerdict from './tempFunction'


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function toConvert(temprature, convert) {
  const input = parseFloat(temprature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { temprature: '', scale: 'c' }
  }
  handleCelsiusChange = (temprature) => {
    this.setState({ scale: 'c', temprature });
  }
  handleFahrenheitChange = (temprature) => {
    this.setState({ scale: 'f', temprature })
  }
  render() {
    const temprature = this.state.temprature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? toConvert(temprature, toCelsius) : temprature;
    const fahrenheit = scale === 'c' ? toConvert(temprature, toFahrenheit) : temprature;
    return (
      <div>
        <TempratureInput scale='c' temprature={celsius} OnTempratureChange={this.handleCelsiusChange} />
        <TempratureInput scale='f' temprature={fahrenheit} OnTempratureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
export default Calculator;