// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//        value: 0,
//     }
//   }
//   inc = () => {
//     this.setState({value: this.state.value + this.props.step});
//   }
//   dec = () => {
//     this.setState({value: this.state.value - this.props.step});
//   }

//   valueHandler = (x) => {
//     this.setState({value: x})
//   }

//   render() {
//     const {value} = this.state;
//     return (
//       <>
//         <h1>Counter: {value}</h1>
//         <button onClick={this.inc}>+</button>
//         <button onClick={value >0 ? this.dec : null}>-</button>
//         <button onClick={this.upd}>0</button>
//         <DisplayValue value={value} valueHandler={this.valueHandler}/>
//       </>
//     )
//   }
// }

import React, { useState } from "react";
import PropTypes from "prop-types";
import DisplayValue from "./DisplayValue";

export default function Counter(props) {
  const [value, setValue] = useState(0);
  const { step, initialValue } = props;

  const inc = () => {
    setValue(value + step);
  };
  const dec = () => {
    setValue(value - step);
  };

  const valueHandler = (newValue) => {setValue(newValue);}
  return (
    <>
      <h1>Counter: {value}</h1>
      <h2>step: {step}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <DisplayValue value={value} valueHandler={valueHandler}></DisplayValue>
    </>
  );
}

Counter.propTypes = {
  step: PropTypes.number,
  initialValue: PropTypes.number,
};
