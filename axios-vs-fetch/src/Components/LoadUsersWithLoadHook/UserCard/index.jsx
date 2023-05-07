import React from "react";
import styles from "./UserCard.module.css";

export default function UserCard(props) {
  const {
    user: { name, email, picture },
    index,
  } = props;
  return (
    <article key={index} className={styles.card}>
      <img src={picture.large} alt={name} className={styles.avatar} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name.title} {name.first} {name.last}</h2>
        <p className={styles.email}>{email}</p>
      </div>
    </article>
  );
}
