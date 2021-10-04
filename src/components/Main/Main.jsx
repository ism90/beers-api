import React from "react";
import CardList from "../CardList/CardList";
import "./Main.scss";

const Main = (props) => {
  const { data } = props;

  return (
    <section className="main">
      <CardList beers={data} />
    </section>
  );
};

export default Main;
