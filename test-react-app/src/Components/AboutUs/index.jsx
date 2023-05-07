import React from 'react'
import { LogoContext } from '../../contexts'

export default function AboutUs() {
  return (
    <LogoContext.Consumer>
      {logo => {
        return (
        <div>
          <h2>I am {logo.name}</h2>
          <h4>{logo.greeting}</h4>
          <p>Visit ut <a href={logo.url} target='_blank'>URL</a></p>
        </div>
        )
      }}
    </LogoContext.Consumer>
  )
}
