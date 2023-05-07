import React, { useState, Component, useReducer } from "react";
import PropTypes from "prop-types";
import DisplayValue from "./DisplayValue";

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//        value: 0,
//     }
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("this props", this.props);
//     console.log("nextProps", nextProps)
//     console.log("this state", this.state);
//     console.log("nextState", nextState)
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

const initialState = { value: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INC": return { value: state.value + 1 };
    case "DEC": return { value: state.value - 1 };
    default: return { value: state.value };
  }
};

export default function Counter(props) {
  // const [value, setValue] = useState(0);
  const { step, initialValue } = props;
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
      <h1>Counter: {state.value}</h1>
      <h2>step: {step}</h2>
      <button onClick={()=>{dispatch({type: 'INC'})}}>+</button>
      <button onClick={()=>{dispatch({type: 'DEC'})}}>-</button>
      {/* <DisplayValue value={state.value}></DisplayValue> */}
    </>
  );
}

Counter.propTypes = {
  step: PropTypes.number,
  initialValue: PropTypes.number,
};
