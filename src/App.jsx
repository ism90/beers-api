import "./App.scss";
import React, { useState } from "react";

import FilterItem from "./components/FilterItem/FilterItem";
import FilterList from "./components/FilterList/FilterList";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SearchBox from "./components/SearchBox/SearchBox";
import beers from "./data/beers";



const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Main data={beers} />
    </div>
  );
};

export default App;
