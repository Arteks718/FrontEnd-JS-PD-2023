import React from "react";
import styles from "./MobileApp.module.css";
import classNames from "classnames";

export default function MobileApp(props) {
  const [mobText, mobTitle, mobAbout] = props.titleInfo;
  const { sideImg, isImgFirst } = props;
  const orderInfo = isImgFirst ? null : styles.reverseBlock;
  return (
    <article >
      <div className={classNames(styles.mobi, orderInfo)}> 
        <img src={sideImg} alt="mobile" />
        <div className={styles.info}>
          <h3 className={styles.mobiColor}>{mobText}</h3>
          <h2 className={styles.mobiTitle}> {mobTitle}</h2>
          <h4 className={styles.mobiText}> {mobAbout}</h4>
        </div>
      </div>
    </article>
  );
}
