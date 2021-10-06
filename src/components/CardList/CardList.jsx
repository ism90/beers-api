import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { beers } = props;

  const getBeersJSX = beers.map((beer) => {
    return (
      <Card
        className="card"
        key={beer.id}
        name={beer.name}
        img={beer.image_url}
        tagline={beer.tagline}
        abv={beer.abv}
      />
    );
  });

  return (
    <section className="card-list">
      {getBeersJSX}
    </section>
    
  );

};

export default CardList;
