import React from "react";
import CardList from "../CardList/CardList";
import "./Main.scss";

const Main = (props) => {
  const { beers } = props;

  return (
    <section className="main">
      <CardList beers={beers} />
    </section>
  );
};

export default Main;
