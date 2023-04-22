import React, { Component } from "react";

export default class Matrix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: new Date(0,0,0,0,0,10),
    };
    this.id = null;
  }
  go = () => {
    const { count } = this.state;
    const second = new Date(count.valueOf());
    if(count.getSeconds() !== 0) {
      second.setSeconds(count.getSeconds() - 1);
      this.setState({ count: second });
    }
    clearInterval(this.id);
    this.id = null;
  };
  start = () => {
    if(!this.id) this.id = setInterval(this.go, 1000);
  };
  stop = () => {
    clearInterval(this.id);
    this.id = null;

  };
  reset = () => {
    this.setState({ count: new Date(0,0,0) });
    this.stop();
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <p className="clock">{count.toLocaleTimeString('en-GB')}</p>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </>
    );
  }
}
