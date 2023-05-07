import "./App.css";
import React, { Component, useState } from "react";
import Counter from "./Components/Counter";
import { ThemeContext,  LogoContext} from "./contexts";
import Home from "./Pages/Home";

const myLogo = {
  name: 'FreshCode',
  greeting: "Hello! I am FullStack Developer!",
  url: 'https://freshcode.training/',
  src: 'https://static.tildacdn.com/tild3338-3561-4361-a539-613663356437/logo.svg'
}

export default function App() {
  const [logo,setLogo] = useState(myLogo);

  return (
    <>
      <LogoContext.Provider value={logo}>
        <Home></Home>
      </LogoContext.Provider>
    </>
  )
}