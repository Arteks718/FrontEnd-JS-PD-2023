import React from "react";
import styles from "./BoardApp.module.css";
import classNames from "classnames";
export default function BoardApp(props) {
  const [appText, appTitle, appAbout] = props.titleInfo;
  const { btnInfoText, bgImg } = props;
  const backImage = { backgroundImage: `url(${bgImg})`};
  return (
    <>
      <div className={classNames(styles.app)}>
        <p>{appText ? appText : ""}</p>
        <h1>{appTitle}</h1>
        <h4>{appAbout}</h4>
        <div classNames="buttonContainer"></div>
      </div>
    </>
  );
}
