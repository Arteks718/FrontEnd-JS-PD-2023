import React, {useState} from "react";
import styles from "./CardItem.module.css"
import Icon from "@mdi/react"
import { mdiAccountOutline, mdiAccountCheck } from '@mdi/js';

export default function CardItem(props) {
  const {user: { fullName, isSelected}, select } = props;
  const selectedStyle = isSelected ? styles.selectedCard : null;
  return (
    <li onClick={select} className={selectedStyle}>
      <p>User: {fullName}</p> <Icon path={mdiAccountOutline} size={1}></Icon>
    </li>
  );
}
