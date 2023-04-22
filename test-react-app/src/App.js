import "./App.css";
import React, { Component } from "react";
// import Matrix from './Components/Matrix';
// import StopWatch from './Components/StopWatch';
// import ProductCard from "./Components/ProductCard";
// import SignIn from "./Pages/SignIn";
import Counter from "./Components/Counter"
import Hello from "./Components/FunctionsComponents/Hello"

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

const currentUser = {
  firstName: 'Genry',
  lastName: 'Watson',
}

export default class App extends Component {
  render() {
    return (
      <>
        {/* {db.map((c, i) => (
          <ProductCard key={i} product={c} />
        ))} */}
        {/* <Hello user={currentUser} isHello={true} /> */}
        <Counter step={10}></Counter>
      </>
    );
  }
}
