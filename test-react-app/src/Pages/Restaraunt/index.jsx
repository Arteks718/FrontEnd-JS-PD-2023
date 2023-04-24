import React from "react";
import Header from "./Header"
import BoardApp from "./BoardApp";
import MobileApp from "./MobileApp";
import Footer from "./Footer"

import boardBgImg from "./images/boardAppBgImg.png";
import orderBgImg from "./images/orderBgImg.png";
import mobile1BgImg from "./images/mobile1BgImg.png";
import mobile2BgImg from "./images/mobile2BgImg.png";

const restTitle = [
  "Restaraunt App",
  "Why stay hungry when you can order form Eats",
  "Order in exchange for hunger",
];
const restBtnInfo = ["Delivery", "Menu"];

const orderTitle = [
  "Order Now",
  "Available on your favorite store. Start your premium experience now",
];
const orderBtnInfo = ["Playstore", "App Store"];

const mobInfo1 = [
  "Create an account",
  "Create/login to an existing account to get started",
  "An account is created with your email and a desired password",
];
const mobInfo2 = [
  "Explore varieties",
  "Shop for your favorites meal as e dey hot.",
  "Shop for your favorite meals or drinks and enjoy while doing it.",
];

const menuInfo = ['Home', 'Product', 'FAQ', 'Contact'];

export default function Restaraunt() {
  return (
    <>
      <Header info={menuInfo}/>
      <BoardApp
        titleInfo={restTitle}
        btnInfoText={restBtnInfo}
        bgImg={boardBgImg}
      />

      <MobileApp
        titleInfo={mobInfo1}
        sideImg={mobile1BgImg}
        isImgFirst={true}
      />
      <MobileApp
        titleInfo={mobInfo2}
        sideImg={mobile2BgImg}
        isImgFirst={false}
      />
      <BoardApp
        titleInfo={orderTitle}
        btnInfoText={orderBtnInfo}
        bgImg={orderBgImg}
      />
      <Footer />
    </>
  );
}
