import React, { useState } from "react";

export default function Controller(props) {
  const {imgsCount, currentImageId} = props;
  const [isRun, setIsRun] = useState(false);
  const [idShow, setIdShow] = useState(null);
  const [delay, setDelay] = useState(1000);

  const setPrevSlide = () => {};

  const setNextSlide = () => {
    // currentImageId == imgsCount ? setCurrentImageId(0) : setCurrentImageId(currentImageId + 1);
  };

  const handlerDelay = (event) => {setDelay(event.targen.value)}

  const start = () => {
    if(!isRun) {
      setIsRun(true);
    }
  };

  const stop = () => {};

  return (
    <div>
      <div>
        <button onClick={setPrevSlide}>{'<'}</button>
        <button onClick={setNextSlide}>{'>'}</button>
      </div>
      <div>
        <p>Slideshow</p>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <span>delay {delay}</span>
        <input value={delay} type="range" min={1000} max={5000} step={200} />
      </div>
    </div>
  );
}
