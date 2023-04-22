import React, { Component } from "react";
import PropTypes from "prop-types";

export default function DisplayValue(props) {
  const { value, valueHandler } = props;

  const upd = (newValue) => {
    valueHandler(0);
  };

  const mult2 = () => {
    valueHandler(value*2)
  }
  const div2 = () => {
    valueHandler(value/2)
  }
  return (
    <>
      <h3>Inner Display: {value}</h3>
      <button onClick={upd}>zero</button>
      <button onClick={mult2}>mult2</button>
      <button onClick={div2}>div2</button>
    </>
  );
}
DisplayValue.propTypes = {
  value: PropTypes.number.isRequired,
  valueHandler: PropTypes.func.isRequired
}

DisplayValue.defaultProps = {
  value: 1
}

// export default class DisplayValue extends Component {
//   upd = () => {
//     this.props.valueHandler(0);
//   }
//   inc = () => {
//     const x = this.props.value + 1;
//     this.props.valueHandler(x);
//   }
//   dec = () => {
//     const x = this.props.value - 1;
//     this.props.valueHandler(x);
//   }
//   render() {
//     const {value, valueHandler} = this.props;
//     return (
//       <>
//         <h3>Inner Display: {value}</h3>
//         <button onClick={this.upd}>zero</button>
//         <button onClick={this.inc}>+1</button>
//         <button onClick={this.dec}>-1</button>
//       </>
//     )
//   }
// }
