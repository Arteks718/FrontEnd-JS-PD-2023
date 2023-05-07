import React from 'react'
import { LogoContext } from '../../contexts'
import styles from './Header.module.css'

export default function Header() {
  return (
    <LogoContext.Consumer>
      {logo => {
        return (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src={logo.src} alt="logo" />
          </div>
          <h1>{logo.name}</h1>
        </div>
        )
      }}
    </LogoContext.Consumer>
  )
}
