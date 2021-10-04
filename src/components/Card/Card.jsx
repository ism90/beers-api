import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, img, tagline, abv } = props;


  return (
    <>
      <article className="card">
        <h2>{name}</h2>
        <p>{tagline}</p>
        <section>
          <img className="beer-image" src={img} alt="" />
        </section>
        <p>{abv}%</p>
      </article>
    </>
  );
};

export default Card;
