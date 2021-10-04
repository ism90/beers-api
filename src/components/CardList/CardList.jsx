import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { beers } = props;

  const getBeersJSX = beers.map((beer, index) => {
    return (
      <Card
        key={beer + (index + 1)}
        name={beer.name}
        img={beer.image_url}
        tagline={beer.tagline}
        abv={beer.abv}
      />
    );
  });

  return <section className="card-list">{getBeersJSX}</section>;
};

export default CardList;
