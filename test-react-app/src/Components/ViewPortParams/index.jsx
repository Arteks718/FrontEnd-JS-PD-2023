import React, { Component } from "react";

export class ViewPortParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
  }
  resizeWindow = () => {
    this.setState({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow);
  }
  componentDidUnmount() {
    window.addEventListener('resize', this.resizeWindow);
  }
  render() {
    return <>
      <h1>width {this.state.x}</h1>
      <h1>heigth {this.state.y}</h1>
    </>;
  }
}

export default ViewPortParams;
