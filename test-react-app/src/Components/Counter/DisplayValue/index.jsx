import React, { Component } from 'react'

export default class DisplayValue extends Component {
  upd = () => {
    this.props.valueHandler(0);
  }
  inc = () => {
    const x = this.props.value + 1;
    this.props.valueHandler(x);
  }
  dec = () => {
    const x = this.props.value - 1;
    this.props.valueHandler(x);
  }
  render() {
    const {value, valueHandler} = this.props;
    return (
      <>
        <h3>Inner Display: {value}</h3>
        <button onClick={this.upd}>zero</button>
        <button onClick={this.inc}>+1</button>
        <button onClick={this.dec}>-1</button>
      </>
    )
  }
}