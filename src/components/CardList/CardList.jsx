import React from "react";
import "./CardList.scss";

import Card from "../Card/Card";

const CardList = props => {
  const { beers } = props;

  const cardJSX = beers.map(beer => <Card key={beer.id} beer={beer} />);

  return <section className="card-list">{cardJSX}</section>;
};

export default CardList;

