import React, { Component } from "react";
import styles from "./StopWatch.module.css";
import { format, add, addSeconds } from "date-fns";

export default class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: new Date(0, 0, 0),
      test: new Date(),
    };
    this.id = null;
  }
  go = () => {
    const { count } = this.state;
    const second = addSeconds(count, 1)
    // second.setSeconds(count.getSeconds() + 1);
    this.setState({ count: second });
  };
  start = () => {
    if (!this.id) this.id = setInterval(this.go, 1000);
  };
  stop = () => {
    clearInterval(this.id);
    this.id = null;
  };
  reset = () => {
    this.setState({ count: new Date(0, 0, 0) });
    this.stop();
  }
  addSomeDays = options => {
    const newTest = add(this.state.test, options);
  }
  addSomeSeconds = (s) => {
    const {count} = this.state;

  }
  render() {
    const { count } = this.state;
    return (
      <>
        <div className={styles.bg}>
          <p className="clock">{count.toLocaleTimeString("en-GB")}</p>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
          <button onClick={this.reset}>reset</button>
        </div>
        <button onClick={this.addSomeDays}></button>
      </>
    );
  }
}
