import React from "react";
import styles from "./Card.scss";

const Card = (props) => {
  const { name, img, tagline, abv } = props.beer;


  return (
    <>
      <article className={styles.card}>
        <h2>{name}</h2>
        <p>{tagline}</p>
        <section>
          <img className={styles.img} src={img} alt="" />
        </section>
        <p>{abv}%</p>
      </article>
    </>
  );
};

export default Card;
