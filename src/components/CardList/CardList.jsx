import React from "react";
import "./CardList.scss";

import Card from "../Card/Card";

const CardList = props => {
  const { beers } = props;
  // THE LOGIC HAS BEEN MOVED UP A LEVEL TO MAKE CARDLIST REUSABLE 
  // NO REAL LOGIC -> GIVE IT A BEER ARRAY -> IT MAKES BEER CARDS OUT OF IT
  // CARD LIST IS JUST A PRESENTATIONAL COMPONENT 
  const cardJSX = beers.map(beer => <Card key={beer.id} beer={beer} />);

  return <section className="card-list">{cardJSX}</section>;
};

export default CardList;
