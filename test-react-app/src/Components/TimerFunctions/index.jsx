import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const [count, setCount] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRun, setIsRun] = useState(false);
  let id = null;

  const reset = () => {
    setCount(new Date(0, 0, 0, 0, 0, 0, 0));
    // this.setState({count: new Date(0,0,0,0,0,0,0)});
  };

  useEffect(() => {
    if(isRun) { 
      const id = setInterval(go, 1000); 
      return () => {
        clearInterval(id);
      }
    }
 
  },[count, isRun]);

  const go = () => {
    // const { count } = this.state;
    // напрямую состояние изменять нельзя! (состояние иммутабельно)
    const countNew = new Date(count.valueOf());
    countNew.setSeconds(count.getSeconds() + 1);
    setCount(countNew);
    setIsRun(true);
    // this.setState({ count: countNew });
  };

  const start = () => {
    // setIsRun(true);
    if(isRun) { id = (setInterval(go, 1000));}
  };

  const stop = () => {
    clearInterval(id);
    id = null;
  };



  return (
    <>
      <p>{count.toLocaleTimeString("en-GB")}</p>
      <button onClick={()=> setIsRun(true)}>start</button>
      <button onClick={()=> setIsRun(false)}>stop</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

// export default class Stopwatch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//        count: new Date(0,0,0,0,0,0,0)
//     }
//     this.id = null;
//   }

//   go = () => {
//     const {count} = this.state;
//     // напрямую состояние изменять нельзя! (состояние иммутабельно)
//     const countNew = new Date(count.valueOf());
//     countNew.setSeconds(count.getSeconds() + 1);
//     this.setState({count: countNew});
//   }

//   start = () => {
//     if(!this.id) this.id = setInterval(this.go, 1000);
//   }

//   stop = () => {
//     clearInterval(this.id);
//     this.id = null;
//   }

//   reset = () => {
//     this.setState({count: new Date(0,0,0,0,0,0,0)});
//   }

//   render() {
//     const {count} = this.state;
//     return (
//       <>
//         <p>{count.toLocaleTimeString('en-GB')}</p>
//         <button onClick={this.start}>start</button>
//         <button onClick={this.stop}>stop</button>
//         <button onClick={this.reset}>reset</button>
//       </>
//     )
//   }
// }
