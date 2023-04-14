import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";

export class Card extends Component {
  stars = (r) => {
    if (r > 4.5)
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    else if(r > 4)
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalf} />
        </>
      )
    else if(r > 3.5)
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      )
  };

  render() {
    const { name, rating, price, image, inCart } = this.props.card;
    const { select } = this.props;
    console.log(inCart);
    return (
      <div className={styles.card}>
        <img src={image} alt="img-card" />
        <p id={styles.name}>{name}</p>
        <p>
          {rating} {this.stars(rating)}
        </p>
        <p id={styles.price}>
          <sup>$</sup>
          {price}
        </p>
        <button onClick={select} className={styles.addToCart}>
          {inCart ? <FontAwesomeIcon icon={faCheck} /> : "Add to Cart"}
        </button>
      </div>
    );
  }
}

export default Card;
