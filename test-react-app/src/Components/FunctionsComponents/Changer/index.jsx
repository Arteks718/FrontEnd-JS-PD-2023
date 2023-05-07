import React, {useEffect} from 'react'

export default function Changer(props) {
  const [color1,color2, time] = props;
  let newColor = {backgroundColor: color1}
  useEffect(() => {
    setTimeout(() => fun1, time);
  }, [])

  const fun1 = () => {
    (this.style.backgroundColor == color1) ? newColor = {backgroundColor: color2} : newColor = {backgroundColor: color1}
  };

  return (
    <>
      <div style={{width:"200px", height:"200px", margin:"50px", newColor}} ></div>
      <div style={{width:"200px", height:"200px", }} ></div>
      
    </>
  )
}
