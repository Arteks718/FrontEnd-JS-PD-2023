import "./App.css";
import React, { Component } from "react";
// import Matrix from './Components/Matrix';
// import StopWatch from './Components/StopWatch';
// import ProductCard from "./Components/ProductCard";
// import SignIn from "./Pages/SignIn";
import ViewPortParamsHooks from "./Components/ViewPortParamsHooks";
import TimerFunctions from "./Components/TimerFunctions";
import Counter from "./Components/Counter";
import Hello from "./Components/FunctionsComponents/Hello";
import WaterHooks from "./Components/WaterHooks";
import Restaraunt from "./Pages/Restaraunt";
import ClickComponent from "./Components/FunctionsComponents/ClickComponent";
import Calc from "./Components/FunctionsComponents/Calc";
import CardList from "./Components/FunctionsComponents/CardList";
import Slider from "./Components/Slider";

const db = [
  {
    imgSrc: "https://content1.rozetka.com.ua/goods/images/big/95493624.jpg",
    name: "Розумна лампочка NiteBird WB4",
    price: 499,
  },
  {
    imgSrc: "https://content1.rozetka.com.ua/goods/images/big/46924958.jpg",
    name: "Ліхтар Intertool LB-0102",
    price: 699,
  },
  {
    imgSrc: "",
    name: "",
    price: 100,
  },
  {
    imgSrc: "",
    price: "",
  },
  {},
];

const currentUser = [
  {
    firstName: "Genry",
    lastName: "Watson",
  },
  {
    firstName: "John",
    lastName: "Adson",
  },
];

const images = [
  "https://img3.akspic.ru/previews/5/5/4/1/7/171455/171455-zhivopis-illustracia-art-voda-oblako-500x.jpg",
  "",
  "",
];

export default class App extends Component {
  render() {
    return (
      <>
        <Slider images={images}></Slider>
        {/* <CardList></CardList> */}
        {/* <ClickComponent/> */}
        {/* <Calc></Calc> */}
        {/* <Restaraunt></Restaraunt> */}
      </>
    );
  }
}
