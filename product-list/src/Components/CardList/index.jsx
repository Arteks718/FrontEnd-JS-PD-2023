import React, { Component } from "react";
import Card from "./Card";
import styles from './CardList.module.css';

const db = [
  {
    id: 1,
    name: "DJI Mini 3 Pro",
    price: 909,
    rating: 4.6,
    image:
      "https://dronestore.com.ua/wp-content/uploads/2022/05/dji-mini-3-pro-rc-cp.ma_.00000492.02.jpeg",
  },
  {
    id: 2,
    name: "GoPro HERO11 Black",
    price: 449,
    rating: 4.4,
    image: "https://content.rozetka.com.ua/goods/images/big/286181259.jpg",
  },
  {
    id: 3,
    name: "Metting Owl 3",
    price: 209,
    rating: 4.5,
    image:
      "https://www.onedirect.co.uk/media/catalog/product/cache/75074bbb20361d6ad1a18f4d9b157960/m/e/meeting_owl_3.jpg",
  },
  {
    id: 4,
    name: "DJI Mini 2 SE",
    price: 339,
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/61uV306+HXL.jpg",
  },
  {
    id: 5,
    name: "DJI Air 2S",
    price: 980,
    rating: 4.3,
    image:
      "https://dronestore.com.ua/wp-content/uploads/2021/03/drone-dji-air-2s-1.jpg",
  },
  {
    id: 6,
    name: "DJI Mavic 3 Classic",
    price: 1749,
    rating: 3.7,
    image: "https://content.rozetka.com.ua/goods/images/big/304173870.jpg",
  },
  {
    id: 7,
    name: "DJI Mini 3(DJI RC)",
    price: 699,
    rating: 4.7,
    image:
      "https://motostuff.com.ua/wa-data/public/shop/products/84/11/11184/images/108314/108314.970.jpg",
  },
  {
    id: 8,
    name: "Photography Video Lightning",
    price: 199,
    rating: 3.8,
    image:
      "https://m.media-amazon.com/images/I/61bcOWPAB7L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 9,
    name: "DJI RS 3 Mini",
    price: 369,
    rating: 4.6,
    image: "https://s.ek.ua/jpg_zoom1/2359490.jpg",
  },
  {
    id: 10,
    name: "DJI Ronin-SC",
    price: 449,
    rating: 3.9,
    image:
      "https://fotomost.com.ua/content/images/20/1800x1800l80mc0/dji-ronin-sc-59245748326073.jpg",
  },
];

export class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: db.map((c) => ({ ...c, inCart: false })),
    };
  }

  addInCart = (c, i) => {
    const select = () => {
      const { cards } = this.state;
      const temp = [...cards];
      temp[i] = { ...temp[i], inCart: !temp[i].inCart };
      this.setState({ cards: temp });
    };
    return <Card key={i} card={c} select={select}></Card>
  };

  render() {
    const { cards } = this.state;
    return (
      <div className={styles.container}>
        {cards.map(this.addInCart)}
      </div>
    );
  }
}

export default CardList;
