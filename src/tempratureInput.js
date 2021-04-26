import React, { Component } from 'react'


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class TempratureInput extends Component {

    handleChange = (e) => {
        this.props.OnTempratureChange(e.target.value)
    }
    render() {
        const temprature = this.props.temprature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temprature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}
export default TempratureInput;