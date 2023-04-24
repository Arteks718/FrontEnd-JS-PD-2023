import React from "react";
import styles from "./BoardApp.module.css";
import classNames from "classnames";
export default function BoardApp(props) {
  const [appText, appTitle, appAbout] = props.titleInfo;
  const { btnInfoText, bgImg } = props;
  const backImage = { backgroundImage: `url(${bgImg})` };
  return (
    <section className={styles.app} style={backImage}>
      <div className={styles.container}>
        <p className={styles.appText}>{appText}</p>
        <h1 className={styles.appTitle}>{appTitle}</h1>
        <p className={styles.appAbout}>{appAbout}</p>
        <div className={styles.buttonContainer}>
          <div className={classNames(styles.btn, styles.colorBtn)}>
            <p>{btnInfoText[0]}</p>
          </div>
          <div className={classNames(styles.btn, styles.transparentBtn)}>
            <p>{btnInfoText[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
