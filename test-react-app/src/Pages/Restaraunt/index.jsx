import React from "react";
import BoardApp from "../../Components/EatsRestarauntHooks/BoardApp";
import boardBgImg from "../../../public/boardAppBgImg.png";
import orderBgImg from "../../../public/orderBgImg.png"

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
const orderBtnInfo = ['Playstore', 'App Store'];

export default function Restaraunt() {
  return (
    <>
      <BoardApp
        titleInfo={restTitle}
        btnInfoText={restBtnInfo}
        bgImg={boardBgImg}
      />
      <BoardApp
        titleInfo={orderTitle}
        btnInfoText={orderBtnInfo}
        bgImg={orderBgImg}
      />
    </>
  );
}
