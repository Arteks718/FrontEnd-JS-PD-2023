import React, { useState, useEffect } from "react";
import styles from "./Water.module.css";

// export default class Water extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         shape: 'water'
//     };
//     this.styleLiquid = 'waterStyle';
//   }
//   liquidShape = () => {
//     const {temperature} = this.props;
//     if(temperature < 0) {
//         this.setState({shape : 'ice'});
//         this.styleLiquid = 'iceStyle';
//     }
//     else if(temperature >= 100) {
//         this.setState({shape : 'steam'});
//         this.styleLiquid = 'steamStyle';
//     }
//     else{ this.setState({shape : 'water'});
//     this.styleLiquid = 'waterStyle';
//     }
//   };
//   render() {
//     this.liquidShape();
//     return (
//       <h1 className={styles[this.styleLiquid]}>{this.state.shape}</h1>
//     )
//   }
// }

export default function WaterHooks(props) {
  const [shape, setShape] = useState("water");
  const { temperature } = props;

  useEffect(() => {
    if (temperature < 0) {
      setShape("ice");
    } else if (temperature >= 100) {
      setShape("steam");
    } else {
      setShape("water");
    }
  }, []);

  return (
    <h1 className={styles[shape]}>{shape}</h1>
  )
}
